"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import SplitAbout from "@/components/sections/about/SplitAbout";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Sparkles, CheckCircle, Target, Zap, Search, Rocket, Headset, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Proof Digital"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Results", id: "results" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Start Your Growth",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Attract More Clients, Rank on Google, Get More Calls"
          description="Professional web design that converts visitors into customers. We build websites that look beautiful, show up in Google search results, and generate qualified leads for your business."
          tag="Web Design & Digital Marketing"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Get Your Free Website Audit", href: "#contact" },
            { text: "See Our Work", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "circleGradient" }}
          carouselItems={[
            { id: "carousel-1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-computer-monitor-showing-a-high-conver-1772544654531-ccc3e9c0.png", imageAlt: "High-converting landing page design" },
            { id: "carousel-2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-mobile-phone-and-desktop-showing-respo-1772544654252-55878f62.png", imageAlt: "Responsive web design on multiple devices" },
            { id: "carousel-3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-desktop-screen-showing-google-analytic-1772544654547-22ca491d.png", imageAlt: "Google Analytics dashboard with growth metrics" },
            { id: "carousel-4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-businessman-or-professional-working-on-1772544655538-45dd43cc.png", imageAlt: "Professional working on successful website" },
            { id: "carousel-5", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-desktop-showing-a-professional-website-1772544655882-dbc06964.png", imageAlt: "Professional website with clear CTAs" },
            { id: "carousel-6", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/multiple-devices-phone-tablet-laptop-sho-1772544654190-9b7053f9.png", imageAlt: "Cross-platform responsive design showcase" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          ariaLabel="Proof Digital - Web Design Services Showcase"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyThree
          title="What We Deliver"
          description="Complete web solutions designed to grow your business and generate measurable results"
          tag="Our Services"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "1",              title: "Professional Website Design",              tags: ["Custom Design", "Responsive"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-laptop-screen-showing-a-professionally-1772544655805-3c72e51f.png",              imageAlt: "Professional website design"
            },
            {
              id: "2",              title: "Google Search Ranking",              tags: ["SEO", "Organic Traffic"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/google-search-results-page-showing-a-web-1772544655207-5486854e.png",              imageAlt: "Website ranking first on Google search"
            },
            {
              id: "3",              title: "Lead Generation & Calls",              tags: ["Conversions", "Contact Forms"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-professional-phone-screen-showing-inco-1772544654712-c0330c10.png",              imageAlt: "Phone showing incoming calls and leads"
            },
            {
              id: "4",              title: "Professional Branding",              tags: ["Brand Identity", "Consistency"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-collection-of-professional-branding-ma-1772544655899-102e157c.png",              imageAlt: "Professional branding materials collection"
            }
          ]}
          animationType="slide-up"
          ariaLabel="Proof Digital Services Features"
        />
      </div>

      <div id="services" data-section="services">
        <SplitAbout
          title="Why Businesses Choose Proof Digital"
          description="We combine strategic design with proven digital marketing tactics to deliver real results. Your website isn't just beautiful—it's built to sell."
          tag="Our Approach"
          tagIcon={Target}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "Conversion-Focused Design",              description: "Every element strategically placed to guide visitors toward taking action. We design for results, not just aesthetics.",              icon: Zap
            },
            {
              title: "SEO Built-In",              description: "Your website ranks in Google from day one. We implement technical SEO, keyword optimization, and mobile-first design standards.",              icon: Search
            },
            {
              title: "Performance Optimized",              description: "Fast loading times, smooth interactions, and professional branding create trust. Your site performs on all devices.",              icon: Rocket
            },
            {
              title: "Support & Growth",              description: "We don't disappear after launch. Ongoing support, analytics tracking, and optimization keep your site performing at peak efficiency.",              icon: Headset
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/an-upward-trending-graph-or-chart-showin-1772544654427-76dfd862.png"
          imagePosition="right"
          mediaAnimation="slide-up"
          ariaLabel="Why Choose Proof Digital"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Proof Digital transformed our online presence completely. Our website now ranks on the first page of Google for our target keywords, and we're receiving qualified leads consistently. The design is professional, and the conversion rate has exceeded our expectations. Highly recommended!"
          rating={5}
          author="Sarah Johnson, Business Owner"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/professional-headshot-of-a-confident-bus-1772544655495-746b2601.png", alt: "Sarah Johnson" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/professional-headshot-of-a-business-owne-1772544653625-e95c5104.png", alt: "Client" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/professional-headshot-of-a-female-busine-1772544653577-1744740c.png", alt: "Client" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/professional-headshot-of-a-business-owne-1772544655388-62ca05e5.png", alt: "Client" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Client Testimonial"
        />
      </div>

      <div id="results" data-section="results">
        <MetricCardTen
          title="Proven Results"
          description="Our clients see real growth in traffic, leads, and revenue. Here's what we've delivered for businesses like yours."
          tag="Client Success"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              title: "Average Traffic Increase",              subtitle: "First 3 months",              category: "Traffic Growth",              value: "+240%"
            },
            {
              id: "2",              title: "First-Page Google Rankings",              subtitle: "Target keywords",              category: "SEO Results",              value: "+89%"
            },
            {
              id: "3",              title: "Qualified Leads Generated",              subtitle: "Within first quarter",              category: "Lead Generation",              value: "+156%"
            },
            {
              id: "4",              title: "Client Retention Rate",              subtitle: "Ongoing partnerships",              category: "Satisfaction",              value: "98%"
            }
          ]}
          ariaLabel="Proof Digital Results Metrics"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers about our web design and digital marketing services. We're here to help you understand how we can grow your business."
          textPosition="left"
          useInvertedBackground={false}
          animationType="smooth"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How long does it take to build a website?",              content: "Most websites are completed within 4-8 weeks, depending on complexity and the number of pages. We work efficiently without compromising quality. Rush timelines are available upon request."
            },
            {
              id: "2",              title: "Will my website rank on Google?",              content: "Yes! SEO is built into every website we create. We implement on-page optimization, mobile-first design, fast loading speeds, and technical SEO best practices. You'll see improvements within the first 3 months."
            },
            {
              id: "3",              title: "What if I need ongoing support?",              content: "We offer maintenance and support packages to keep your site running smoothly. From updates and backups to performance monitoring and analytics reporting, we've got you covered."
            },
            {
              id: "4",              title: "Can you help with my existing website?",              content: "Absolutely! We can redesign, optimize, or improve your current website. Many clients come to us seeking better rankings, faster speeds, or improved conversion rates on their existing sites."
            },
            {
              id: "5",              title: "What's your pricing like?",              content: "We offer flexible pricing based on your project scope and needs. Website design packages start at competitive rates, and we also offer SEO and lead generation services. Schedule a free consultation to discuss your budget."
            },
            {
              id: "6",              title: "How do you measure success?",              content: "We track metrics that matter: website traffic, Google rankings, qualified leads, and conversion rates. You'll receive regular reports showing exactly how your website is performing and the return on your investment."
            }
          ]}
          ariaLabel="Proof Digital FAQ"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Grow Your Business?"
          description="Let's discuss how we can help you attract more clients, rank higher on Google, and generate qualified leads. Schedule your free website audit and strategy session today."
          useInvertedBackground={false}
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
            { name: "businessName", type: "text", placeholder: "Business Name", required: true }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your business and goals. What would success look like for you?",            rows: 5,
            required: true
          }}
          buttonText="Get Your Free Audit"
          mediaAnimation="slide-up"
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AR9aAPktpzNgpwQzaATrrkzp4d/a-professional-contact-form-interface-sh-1772544654955-92360fe1.png"
          ariaLabel="Contact Proof Digital"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Services",              items: [
                { label: "Web Design", href: "#services" },
                { label: "SEO Services", href: "#services" },
                { label: "Lead Generation", href: "#services" },
                { label: "Brand Design", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Our Process", href: "#" },
                { label: "Success Stories", href: "#testimonials" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Resources", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Proof Digital. All rights reserved."
          bottomRightText="Professional Web Design & Digital Marketing"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
