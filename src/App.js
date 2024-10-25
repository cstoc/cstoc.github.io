import React, { useState } from 'react';

function Header() {
  return (
    <header className="bg-[#fffaf2] shadow-md p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full">
          {/* Left image placeholder */}
        </div>
        <h1 className="text-4xl font-bold text-center font-serif bg-gradient-to-r from-[#228B22] to-[#d4814d] text-transparent bg-clip-text">
          Cura Connections
        </h1>
        <div className="w-16 h-16 bg-gray-300 rounded-full">
          {/* Right image placeholder */}
        </div>
      </div>
    </header>
  );
}

function Navigation({ activeTab, setActiveTab }) {
  const tabs = ["Home", "Make an Appointment", "Learning Hub", "About Us", "FAQ"];
  return (
    <nav className="bg-[#fffaf2] p-4 border-b border-[#228B22]/20">
      <ul className="flex flex-wrap justify-center space-x-4">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-[#228B22] text-[#fffaf2]"
                  : "bg-[#fffaf2] text-[#228B22] hover:bg-[#d4814d] hover:text-[#fffaf2]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between w-full text-left p-4 bg-[#ee9e69] rounded-lg shadow-md text-[#fffaf2] hover:bg-[#fffaf2] hover:text-[#228B22] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-grow pr-4">{question}</span>
        <span className="flex-shrink-0">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-[#fffaf2] rounded-lg shadow-md text-[#672e33]">
          <p className="text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}

function ArticlePreview({ title, excerpt }) {
  return (
    <div className="bg-[#fffaf2] p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold text-[#228B22] mb-2">{title}</h3>
      <p className="text-[#672e33] text-sm">{excerpt}</p>
    </div>
  );
}

function TabContent({ activeTab }) {
  const bgClass = "bg-gradient-to-br from-[#d4814d]/10 to-[#fffaf2]";

  switch (activeTab) {
    case "Home":
      return (
        <div className={`p-8 ${bgClass} max-w-4xl mx-auto`}>
          <h2 className="text-4xl font-semibold mb-6 text-[#228B22]">Welcome to Cura Connections</h2>
          <p className="text-xl text-[#672e33] mb-8">
            Your trusted partner in healing, connecting you with free and affordable healthcare options.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fffaf2] p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-[#228B22]">Our Mission</h3>
              <p className="text-[#672e33] flex-grow">
               At Cura Connections, we listen to your worries and needs, connecting you with healthcare providers that will care for you like we do.
                <br/><br/> We aim to provide accessible, healthcare services and foster meaningful connections between medicine and patients.
                <br/><br/> We understand the difficulties of finding affordable healthcare, especially with doctors you trust. 
              </p>
            </div>
            <div className="bg-[#fffaf2] p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-[#228B22]">Why Choose Us</h3>
              <ul className="list-disc text-[#672e33] pl-5 flex-grow flex flex-col justify-between">
                <li className="mb-4">Community based healthcare coordinators</li>
                <li className="mb-4">Personalized care plans</li>
                <li className="mb-4">Knowledgeable on multiple free healthcare clinics in all 5 boroughs</li>
                <li className="mb-4">Comprehensive support services, right at your fingertips</li>
                <li>Dedicated to finding the best healthcare solutions for you</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case "Make an Appointment":
      return (
        <div className={`p-4 ${bgClass} max-w-4xl mx-auto`}>
          <h2 className="text-2xl font-semibold mb-4 text-[#228B22]">Make an Appointment</h2>
          <div className="bg-[#fffaf2] border-2 border-dashed border-[#d4814d] rounded-lg p-4 text-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdCg389SFtdmiVooW4NyKUesiZVTWPbXWu0L9sO1q_R8lXO0Q/viewform?embedded=true" 
              width="100%" 
              height="1482" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="max-w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      );
    case "Learning Hub":
      return (
        <div className={`p-4 ${bgClass} max-w-4xl mx-auto`}>
          <h2 className="text-2xl font-semibold mb-4 text-[#228B22]">Learning Hub</h2>
          <p className="text-[#672e33] mb-6">
            Welcome to our Learning Hub. Here you'll find resources, articles,
            and educational content to help you on your healthcare journey.
          </p>
          <div className="text-center mb-8">
            <a 
              href="/articles" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#228B22] text-[#fffaf2] px-6 py-2 rounded-md hover:bg-[#d4814d] transition-colors duration-200"
            >
              Read More Articles
            </a>
          </div>
          <div className="space-y-6">
            <ArticlePreview 
              title="The Importance of Preventative Medicine"
              excerpt="Discover how regular check-ups and screenings can help detect health issues early and improve overall well-being..."
            />
            <ArticlePreview 
              title="Navigating Healthcare Access in NYC"
              excerpt="Learn about the various options for affordable healthcare in New York City, including free clinics and community health centers..."
            />
            <ArticlePreview 
              title="Understanding Your Health Insurance Options"
              excerpt="A comprehensive guide to different types of health insurance plans and how to choose the best one for your needs..."
            />
          </div>
        </div>
      );
    case "About Us":
      return (
        <div className={`p-4 ${bgClass} max-w-4xl mx-auto`}>
          <h2 className="text-2xl font-semibold mb-4 text-[#228B22]">About Us</h2>
          <p className="text-[#672e33]">
            Cura Connections is dedicated to connecting patients with the right healthcare providers and answering any questions about the healthcare system our patients may have.
            <br/><br/> Our mission started as a simple conversation with our community members who either did not trust the American medical system or did not know where to receive care because they did not have insurance. 
            <br/><br/> Through these conversations, we understood a bridge was needed to connect patients without access to insurance with the proper healthcare they needed. 
            <br/><br/> This bridge became Cura Connections. Carolina Stocchi, the founder, learned of different free clinics and other free healthcare options available to people through her work as a Clinical Research Coordinator at Mount Sinai Hospital. This allowed her to use this knowledge to help others in her community, one conversation at a time.
            <br/><br/> Our mission has always been driven by the intent to educate on the benefits of preventative medicine and to make healthcare more accessible to those who can not afford it. Whether you're looking to have a regular physical exam, or to see a doctor for a more specialized need, Cura Connections is here to help support our community any way we can. 
          </p>
        </div>
      );
    case "FAQ":
      return (
        <div className={`p-4 ${bgClass} max-w-4xl mx-auto`}>
          <h2 className="text-2xl font-semibold mb-4 text-[#228B22]">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto">
            <FAQItem 
              question="How do I schedule an appointment?" 
              answer="To schedule an appointment, simply click on the 'Make an Appointment' tab and fill out the form. Our team will get back to you within 24-48 hours to confirm your appointment for a consultation with us. This is the first step in getting to know you and your needs."
            />
            <FAQItem 
              question="Who is eligible for help with Cura Connections?" 
              answer="Cura Connections is here to help anyone who needs assistance in finding affordable healthcare options, regardless of their insurance status or income level. We specialize in helping those who are uninsured or underinsured."
            />
            <FAQItem 
              question="How much will it cost me?" 
              answer="Our service of connecting you with healthcare providers is completely free! The cost of medical care will depend on the clinic or provider you visit, but we work hard to find the most affordable options for our clients, including free clinics when available."
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}

function CuraConnections() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="min-h-screen bg-[#fffaf2] flex flex-col">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className="bg-[#fffaf2] rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
          <TabContent activeTab={activeTab} />
        </div>
      </main>
      <footer className="bg-[#d4814d]/10 p-4 mt-8">
        <p className="text-center text-[#672e33]">
          © 2024 Cura Connections. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fffaf2]">
      <CuraConnections />
    </div>
  );
}