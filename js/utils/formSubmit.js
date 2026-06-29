export class FormSubmit {
    constructor() {
        this.form = document.querySelector('form');
        this.messageDiv = document.getElementById('message');
    }

    init() {
        if (!this.form) return;
        this.form.addEventListener('submit', this.handleSubmit());
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.messageDiv) return;
        this.messageDiv.className = 'message';

        const formData = new FormData(this.form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                this.messageDiv.className = 'message success';
                this.messageDiv.textContent = '✅ Данные успешно отправлены! Ожидайте этапа.';
                this.form.reset();
            } else {
                throw new Error('Ошибка отправки');
            }
        } catch (error) {
            this.messageDiv.className = 'message error';
            this.messageDiv.textContent = '❌ Ошибка при отправке. Попробуйте снова.';
        }

        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
            if (this.messageDiv) {
                this.messageDiv.className = 'message';
            }
        }, 5000);
    }
}
