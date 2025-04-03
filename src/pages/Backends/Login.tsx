import React, { useState } from 'react';
import { Newspaper, Layout, PlusCircle, Edit, Trash2, BarChart3, FileText, Tag, Users } from 'lucide-react';
import { MOCK_USER, MOCK_ARTICLES } from './Data';
import { Article } from './Types';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [articles, setArticles] = useState<Article[]>(MOCK_ARTICLES);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleDelete = (id: string) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newArticle = {
      id: editingArticle?.id || Date.now().toString(),
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      category: formData.get('category') as string,
      imageUrl: formData.get('imageUrl') as string,
      createdAt: new Date().toISOString().split('T')[0]
    };

    if (editingArticle) {
      setArticles(articles.map(a => a.id === editingArticle.id ? newArticle : a));
    } else {
      setArticles([...articles, newArticle]);
    }
    setShowForm(false);
    setEditingArticle(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f3f2f0] to-white flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl w-96">
          <div className="flex items-center justify-center mb-8">
            <Newspaper className="text-[#f19335] w-12 h-12" />
            <h1 className="text-3xl font-bold ml-2">Roar CMS</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f19335]"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f19335]"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f19335] text-white py-2 rounded-lg hover:bg-[#d97d1d] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-[#f19335]" />
              <span className="ml-2 text-xl font-semibold">Roar CMS Dashboard</span>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Dashboard Stats */}
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-[#fff0e1] text-[#f19335]">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Articles</p>
                  <p className="text-2xl font-semibold text-gray-900">{articles.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-[#fff0e1] text-[#f19335]">
                  <Tag className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Categories</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {new Set(articles.map(a => a.category)).size}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-[#fff0e1] text-[#f19335]">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">This Month</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {articles.filter(a => {
                      const date = new Date(a.createdAt);
                      const now = new Date();
                      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
                    }).length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-[#fff0e1] text-[#f19335]">
                  <Users className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Active Users</p>
                  <p className="text-2xl font-semibold text-gray-900">1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Articles</h2>
            <button
              onClick={() => {
                setEditingArticle(null);
                setShowForm(true);
              }}
              className="flex items-center px-4 py-2 bg-[#f19335] text-white rounded-lg hover:bg-[#d97d1d]"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              New Article
            </button>
          </div>

          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
                <h3 className="text-xl font-bold mb-4">
                  {editingArticle ? 'Edit Article' : 'New Article'}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Title</label>
                      <input
                        name="title"
                        defaultValue={editingArticle?.title}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f19335] focus:ring-[#f19335]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Category</label>
                      <input
                        name="category"
                        defaultValue={editingArticle?.category}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f19335] focus:ring-[#f19335]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Image URL</label>
                      <input
                        name="imageUrl"
                        defaultValue={editingArticle?.imageUrl}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f19335] focus:ring-[#f19335]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Content</label>
                      <textarea
                        name="content"
                        defaultValue={editingArticle?.content}
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f19335] focus:ring-[#f19335]"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingArticle(null);
                      }}
                      className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#f19335] text-white rounded-md hover:bg-[#d97d1d]"
                    >
                      {editingArticle ? 'Update' : 'Create'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={article.imageUrl}
                          alt=""
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{article.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#fff0e1] text-[#f19335]">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {article.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(article)}
                        className="text-[#f19335] hover:text-[#d97d1d] mr-4"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;