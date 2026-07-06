import React from "react";
import "./ServicesGrid.css";

export default function ServicesGrid() {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- Services Grid Section -->
<section class="section-padding bg-white position-relative spotlight-group" id="servicesGrid">
    <div class="position-absolute top-0 end-0 w-100 h-100 bg-light opacity-30 skew-y-3" style="z-index: 0;"></div>
    <div class="container position-relative z-1">
        <div class="text-center mb-5">
            <div data-aos="fade-up" data-aos-duration="800">
                <span
                    class="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3">
                    <i class="fas fa-code me-2"></i> Our Expertise
                </span>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <h2 class="hero-title mb-0 section-heading">Comprehensive Tech Solutions</h2>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <div class="mx-auto mt-3 rounded-pill bg-gradient-primary" style="width: 80px; height: 4px;"></div>
            </div>
        </div>
        <div class="row g-4 justify-content-center" id="cardsContainer">
            <!-- Service 1 -->
            <div class="col-md-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <div class="spotlight-card p-4 text-center">
                    <div
                        class="icon-square bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 d-inline-flex">
                        <i class="fas fa-code fa-2x"></i>
                    </div>
                    <h4 class="h5 fw-bold text-dark">Custom Web Development</h4>
                    <p class="text-muted small mb-4">Tailor-made web applications built with performance and scalability
                        in mind.</p>
                    <a href="service-website-development" class="text-primary small fw-bold text-decoration-none">Learn
                        More <i class="fas fa-arrow-right ms-1"></i></a>
                </div>
            </div>
            <!-- Service 2 -->
            <div class="col-md-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <div class="spotlight-card p-4 text-center">
                    <div
                        class="icon-square bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 d-inline-flex">
                        <i class="fas fa-mobile-screen-button fa-2x"></i>
                    </div>
                    <h4 class="h5 fw-bold text-dark">Mobile App Development</h4>
                    <p class="text-muted small mb-4">Native and cross-platform mobile apps that provide seamless users
                        experiences.</p>
                    <a href="service-mobile-app" class="text-primary small fw-bold text-decoration-none">Learn More <i
                            class="fas fa-arrow-right ms-1"></i></a>
                </div>
            </div>
            <!-- Service 3 -->
            <div class="col-md-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                <div class="spotlight-card p-4 text-center">
                    <div
                        class="icon-square bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 d-inline-flex">
                        <i class="fas fa-store fa-2x"></i>
                    </div>
                    <h4 class="h5 fw-bold text-dark">E-Commerce Solutions</h4>
                    <p class="text-muted small mb-4">Robust online stores with secure payment gateways and inventory
                        management.</p>
                    <a href="service-website-development" class="text-primary small fw-bold text-decoration-none">Learn
                        More <i class="fas fa-arrow-right ms-1"></i></a>
                </div>
            </div>
            <!-- Service 4 -->
            <div class="col-md-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                <div class="spotlight-card p-4 text-center">
                    <div
                        class="icon-square bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 d-inline-flex">
                        <i class="fas fa-chart-line fa-2x"></i>
                    </div>
                    <h4 class="h5 fw-bold text-dark">SEO & Digital Marketing</h4>
                    <p class="text-muted small mb-4">Data-driven strategies to increase visibility and drive organic
                        traffic.</p>
                    <a href="service-digital-marketing" class="text-primary small fw-bold text-decoration-none">Learn
                        More <i class="fas fa-arrow-right ms-1"></i></a>
                </div>
            </div>
            <!-- Service 5 -->
            <div class="col-md-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                <div class="spotlight-card p-4 text-center">
                    <div
                        class="icon-square bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 d-inline-flex">
                        <i class="fas fa-cloud-arrow-up fa-2x"></i>
                    </div>
                    <h4 class="h5 fw-bold text-dark">Cloud Integration</h4>
                    <p class="text-muted small mb-4">Seamless migration and management of cloud infrastructure.</p>
                    <a href="services" class="text-primary small fw-bold text-decoration-none">Learn More <i
                            class="fas fa-arrow-right ms-1"></i></a>
                </div>
            </div>
            <!-- Service 6 -->
            <div class="col-md-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                <div class="spotlight-card p-4 text-center">
                    <div
                        class="icon-square bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 d-inline-flex">
                        <i class="fas fa-shield-alt fa-2x"></i>
                    </div>
                    <h4 class="h5 fw-bold text-dark">Cybersecurity</h4>
                    <p class="text-muted small mb-4">Proactive security audits and implementation to protect your data.
                    </p>
                    <a href="services" class="text-primary small fw-bold text-decoration-none">Learn More <i
                            class="fas fa-arrow-right ms-1"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>

` }} />;
}
