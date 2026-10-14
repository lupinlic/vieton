const recipient = "nguyentrunghuyenhvtc@gmail.com";

export function ContactForm() {
  return (
    <form
      className="contact-fields"
      action={`https://formsubmit.co/${recipient}`}
      method="POST"
      acceptCharset="UTF-8"
    >
      <input
        type="hidden"
        name="_subject"
        value="Thông tin liên hệ mới từ website Vieton"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" hidden />

      <label className="contact-field">
        <span>Họ và tên *</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Tên của bạn"
          maxLength={120}
          required
        />
      </label>
      <label className="contact-field">
        <span>Email *</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="ban@congty.com"
          maxLength={254}
          required
        />
      </label>
      <label className="contact-field">
        <span>Số điện thoại</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+84"
          maxLength={32}
        />
      </label>
      <label className="contact-field">
        <span>Doanh nghiệp</span>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Tên doanh nghiệp"
          maxLength={160}
        />
      </label>
      <label className="contact-field contact-field-message">
        <span>Bạn muốn trao đổi về điều gì? *</span>
        <textarea
          name="message"
          rows={3}
          placeholder="Chia sẻ ngắn về mục tiêu của bạn"
          maxLength={5000}
          required
        />
      </label>
      <div className="contact-form-actions">
        <p>Thông tin sẽ được gửi về email Vieton.</p>
        <button className="contact-submit" type="submit">
          Gửi thông tin <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
