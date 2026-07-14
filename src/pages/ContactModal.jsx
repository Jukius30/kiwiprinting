import React, { useState } from 'react';

function ContactModal() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Menyusun URL mailto otomatis ke email kantor Kiwi Printing
    const emailTujuan = 'printingkiwi@gmail.com';
    const subjectEmail = encodeURIComponent(formData.subject || 'Tanya Seputar Cetak Kiwi Printing');
    const bodyEmail = encodeURIComponent(`Nama: ${formData.name}\n\nPesan:\n${formData.message}`);
    
    // Membuka aplikasi email user
    window.location.href = `mailto:${emailTujuan}?subject=${subjectEmail}&body=${bodyEmail}`;
  };

  return (
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4">
          
          {/* Header Modal */}
          <div className="modal-header border-0 pt-4 px-4">
            <h5 className="modal-title fw-bold fs-4" id="contactModalLabel">
              Hubungi <span style={{ color: '#00a2ff' }}>Kiwi Printing</span>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          {/* Body / Form Modal */}
          <form onSubmit={handleSubmit}>
            <div className="modal-body px-4 py-3">
              <p className="text-secondary small mb-4">
                Kirimkan pertanyaan atau kebutuhan cetak Anda, pesan akan langsung diarahkan ke email resmi kami.
              </p>
              
              <div className="mb-3">
                <label className="form-label fw-semibold small">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control rounded-3" 
                  placeholder="Masukkan nama Anda" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label fw-semibold small">Subjek / Perihal</label>
                <input 
                  type="text" 
                  name="subject"
                  className="form-control rounded-3" 
                  placeholder="Contoh: Tanya Cetak Stiker Brosur" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label fw-semibold small">Pesan Anda</label>
                <textarea 
                  name="message"
                  className="form-control rounded-3" 
                  rows="4" 
                  placeholder="Tuliskan detail ukuran, bahan, atau jumlah cetakan..." 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            
            {/* Footer Modal */}
            <div className="modal-footer border-0 pb-4 px-4 gap-2">
              <button type="button" className="btn btn-light rounded-pill px-4 fw-semibold" data-bs-dismiss="modal">
                Batal
              </button>
              <button 
                type="submit" 
                className="btn text-white rounded-pill px-4 fw-bold shadow-sm"
                style={{ backgroundColor: '#00a2ff', border: 'none' }}
              >
                🚀 Kirim Email
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default ContactModal;