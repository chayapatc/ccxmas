'use client'

import { useState } from 'react'

export default function ChristmasRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickName: '',
    phone: '',
    age: '',
    address: '',
    familySize: 1,
    dietary: '',
    notes: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        // Redirect to ticket page with the registration ID
        window.location.href = `/ticket/${data.id}`
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      alert('Error submitting registration. Please try again.')
      console.error('Error:', error)
    }
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-red-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Christmas Celebration Registration</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nickname</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                value={formData.nickName}
                onChange={(e) => setFormData({...formData, nickName: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border rounded-lg p-2"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Age</label>
              <input
                type="number"
                min="0"
                className="w-full border rounded-lg p-2"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                className="w-full border rounded-lg p-2"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                rows={2}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Family Size</label>
              <input
                type="number"
                min="1"
                className="w-full border rounded-lg p-2"
                value={formData.familySize}
                onChange={(e) => setFormData({...formData, familySize: Number(e.target.value)})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Dietary Requirements</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                value={formData.dietary}
                onChange={(e) => setFormData({...formData, dietary: e.target.value})}
                placeholder="Any food allergies or restrictions"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Additional Notes</label>
              <textarea
                className="w-full border rounded-lg p-2"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows={3}
                placeholder="Any additional information we should know"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg"
            >
              Register for Christmas Celebration
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
