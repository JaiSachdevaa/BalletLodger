import { useState } from 'react';
import '../styles/SubmitApplication.css';

export default function SubmitApplication() {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    position: '',
    manifesto: '',
    termsAgreed: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const positions = [
    'Student Union President',
    'Vice President',
    'Treasurer',
    'Secretary',
    'Class Representative'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.studentId.trim()) newErrors.studentId = 'Student ID is required';
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.manifesto.trim()) newErrors.manifesto = 'Manifesto is required';
    if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to the terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      alert(`Application Submitted!\n${JSON.stringify(formData, null, 2)}`);
      setIsSubmitting(false);
      setFormData({
        name: '',
        studentId: '',
        position: '',
        manifesto: '',
        termsAgreed: false
      });
      setErrors({});
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="application-container">
      <h1>Election Application</h1>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.studentId ? 'has-error' : ''}`}>
          <label htmlFor="studentId">Student ID</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="Enter your student ID"
          />
          {errors.studentId && <span className="error">{errors.studentId}</span>}
        </div>

        <div className={`form-group ${errors.position ? 'has-error' : ''}`}>
          <label htmlFor="position">Position</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">Select a position</option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
          {errors.position && <span className="error">{errors.position}</span>}
        </div>

        <div className={`form-group ${errors.manifesto ? 'has-error' : ''}`}>
          <label htmlFor="manifesto">Manifesto (Why should you be elected?)</label>
          <textarea
            id="manifesto"
            name="manifesto"
            value={formData.manifesto}
            onChange={handleChange}
            placeholder="Explain your qualifications and goals (minimum 100 characters)"
            rows={5}
          />
          {errors.manifesto && <span className="error">{errors.manifesto}</span>}
        </div>

        <div className={`form-group terms-group ${errors.termsAgreed ? 'has-error' : ''}`}>
          <input
            type="checkbox"
            id="termsAgreed"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
          />
          <label htmlFor="termsAgreed">
            I agree to the <a href="/election-terms" target="_blank">Election Terms and Conditions</a>
          </label>
          {errors.termsAgreed && <span className="error">{errors.termsAgreed}</span>}
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}