if (!customElements.get('testimonial-carousel')) {
  class TestimonialCarousel extends HTMLElement {
    constructor() {
      super();
      this.track = this.querySelector('.carousel__track');
      this.prevBtn = this.querySelector('.carousel__arrow--prev');
      this.nextBtn = this.querySelector('.carousel__arrow--next');
    }

    connectedCallback() {
      if (!this.track) return;

      if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.scroll( -1 ));
      if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.scroll( 1 ));
    }

    scroll(direction) {
      const slide = this.querySelector('.carousel__slide');
      if (!slide) return;
      
      const slideWidth = slide.offsetWidth + 20; // slide width + gap
      this.track.scrollBy({
        left: slideWidth * direction,
        behavior: 'smooth'
      });
    }
  }

  customElements.define('testimonial-carousel', TestimonialCarousel);
}
