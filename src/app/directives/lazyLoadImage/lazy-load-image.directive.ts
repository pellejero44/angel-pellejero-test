import { Directive, ElementRef, Renderer2, Input, Inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[lazy-load-images]'
})
export class LazyLoadImagesDirective {

  @Input('lazy-load-images') intersectionObserverConfig: Object;

  intersectionObserver: IntersectionObserver;
  rootElement: HTMLElement;

  constructor(element: ElementRef,public renderer: Renderer2) {
      this.rootElement = element.nativeElement;
    }

  init() {
    this.registerIntersectionObserver();
    
    this.observeDOMChanges(this.rootElement, () => {
      const imagesFoundInDOM = this.getAllImagesToLazyLoad(this.rootElement);
      imagesFoundInDOM.forEach((image: HTMLElement) => this.intersectionObserver.observe(image));
    });
  }
  
  ngOnInit() {
    this.init()
  }
  
  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  registerIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver(
      images => images.forEach(image => this.onIntersectionChange(image)),
      this.intersectionObserverConfig instanceof Object ? this.intersectionObserverConfig : undefined
    );

    return this.intersectionObserver;
  }

  observeDOMChanges(rootElement: HTMLElement, onChange: Function) {
    // Create a Mutation Observer instance
    const observer = new MutationObserver(mutations => onChange(mutations));

    // Observer Configuration
    const observerConfig = {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true
    };

    // Observe Directive DOM Node
    observer.observe(rootElement, observerConfig);

    // Fire onChange callback to check current DOM nodes
    onChange();

    return observer;
  }

  getAllImagesToLazyLoad(pageNode: HTMLElement) {
    return Array.from(pageNode.querySelectorAll('img[data-src]'));
  }

  onIntersectionChange(image: any) {
    if (!image.isIntersecting) {
      return;
    }

    this.onImageAppearsInViewport(image.target);
  }

  onImageAppearsInViewport(image: any) {
    if (image.dataset.src) {
      this.renderer.setAttribute(image, 'src', image.dataset.src);
      this.renderer.listen(image, 'error', (event) => {
          this.renderer.setAttribute(image, 'src', '/assets/images/notFound.jpg');
      });
      this.renderer.removeAttribute(image, 'data-src');
    }
    // Stop observing the current target
    if (this.intersectionObserver) {
      this.intersectionObserver.unobserve(image);
    }
  }

}