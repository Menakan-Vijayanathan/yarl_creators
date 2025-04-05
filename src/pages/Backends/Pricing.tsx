import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/pricing';
const USD_TO_AUD_RATE = 1.5; // You can adjust this rate

interface PricingPlan {
  _id?: string;
  type: string;
  monthlyPriceUSD: string;
  yearlyPriceUSD: string;
  monthlyPriceAUD: string;
  yearlyPriceAUD: string;
  capabilities: string[] | string;
  features: string[] | string;
}

const PricingManager: React.FC = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [formData, setFormData] = useState<PricingPlan>({
    type: '',
    monthlyPriceUSD: '',
    yearlyPriceUSD: '',
    monthlyPriceAUD: '',
    yearlyPriceAUD: '',
    capabilities: '',
    features: '',
  });

  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchPlans = async () => {
    try {
      const res = await axios.get<PricingPlan[]>(`${API_URL}/get`);
      setPlans(res.data);
    } catch (err) {
      console.error('Error fetching plans:', err);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    if (name === 'monthlyPriceUSD') {
      const monthlyUSD = parseFloat(value);
      if (!isNaN(monthlyUSD)) {
        const yearlyUSD = (monthlyUSD * 10).toFixed(2); // Adjusted for your use case
        const yearlyAUD = (parseFloat(yearlyUSD) * USD_TO_AUD_RATE).toFixed(2);
        const monthlyAUD = (monthlyUSD * USD_TO_AUD_RATE).toFixed(2);

        updatedFormData.yearlyPriceUSD = yearlyUSD;
        updatedFormData.yearlyPriceAUD = yearlyAUD;
        updatedFormData.monthlyPriceAUD = monthlyAUD;
      } else {
        updatedFormData.yearlyPriceUSD = '';
        updatedFormData.yearlyPriceAUD = '';
        updatedFormData.monthlyPriceAUD = '';
      }
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const dataToSend: PricingPlan = {
      ...formData,
      capabilities: (formData.capabilities as string).split(',').map(item => item.trim()),
      features: (formData.features as string).split(',').map(item => item.trim()),
    };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/update/${editingId}`, dataToSend);
      } else {
        await axios.post(`${API_URL}/post`, dataToSend);
        alert("success")
      }

      setFormData({
        type: '',
        monthlyPriceUSD: '',
        yearlyPriceUSD: '',
        monthlyPriceAUD: '',
        yearlyPriceAUD: '',
        capabilities: '',
        features: '',
      });
      setEditingId(null);
      fetchPlans();
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  const handleEdit = (plan: PricingPlan) => {
    setFormData({
      ...plan,
      capabilities: (plan.capabilities as string[]).join(', '),
      features: (plan.features as string[]).join(', '),
    });
    setEditingId(plan._id ?? null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this plan?')) {
      try {
        await axios.delete(`${API_URL}/delete/${id}`);
        fetchPlans();
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">💼 Pricing Plan Manager</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="type" placeholder="Plan Type" value={formData.type} onChange={handleChange} className="border p-3 rounded w-full" />
          <input name="monthlyPriceUSD" placeholder="Monthly Price (USD)" value={formData.monthlyPriceUSD} onChange={handleChange} className="border p-3 rounded w-full" />
          <input name="yearlyPriceUSD" placeholder="Yearly Price (USD)" value={formData.yearlyPriceUSD} readOnly className="bg-gray-100 border p-3 rounded w-full" />
          <input name="monthlyPriceAUD" placeholder="Monthly Price (AUD)" value={formData.monthlyPriceAUD} readOnly className="bg-gray-100 border p-3 rounded w-full" />
          <input name="yearlyPriceAUD" placeholder="Yearly Price (AUD)" value={formData.yearlyPriceAUD} readOnly className="bg-gray-100 border p-3 rounded w-full" />
          <input name="capabilities" placeholder="Capabilities (comma-separated)" value={formData.capabilities as string} onChange={handleChange} className="border p-3 rounded w-full" />
          <input name="features" placeholder="Features (comma-separated)" value={formData.features as string} onChange={handleChange} className="border p-3 rounded w-full" />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
          {editingId ? 'Update Plan' : 'Add Plan'}
        </button>
      </form>

      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan._id} className="bg-white shadow-lg rounded-lg p-5 border hover:shadow-xl transition duration-300">
            <div className="text-xl font-bold text-blue-800 mb-2">{plan.type}</div>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>USD:</strong> {plan.monthlyPriceUSD}/mo | {plan.yearlyPriceUSD}/yr</p>
              <p><strong>AUD:</strong> {plan.monthlyPriceAUD}/mo | {plan.yearlyPriceAUD}/yr</p>
              <p><strong>Capabilities:</strong> {(plan.capabilities as string[]).join(', ')}</p>
              <p><strong>Features:</strong> {(plan.features as string[]).join(', ')}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={() => handleEdit(plan)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded transition duration-300">
                Edit
              </button>
              <button onClick={() => handleDelete(plan._id!)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition duration-300">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingManager;
