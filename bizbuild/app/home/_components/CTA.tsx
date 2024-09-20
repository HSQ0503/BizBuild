import React from 'react';
import { FiUsers, FiInfo, FiHeart } from 'react-icons/fi';
import Link from 'next/link';

interface CTACardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const CTACard: React.FC<CTACardProps> = ({ title, description, icon, link }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="bg-[#00CC99] p-6">
      {icon}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#082E22] mb-2">{title}</h3>
      <p className="text-[#000000] mb-4">{description}</p>
      <Link href={link} className="inline-block bg-[#082E22] text-white py-2 px-4 rounded hover:bg-[#00CC99] hover:text-[#082E22] transition-colors duration-300">
        Learn More
      </Link>
    </div>
  </div>
);

export default function CTASection() {
  return (
    <section className="bg-[#E6F7F2] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CTACard
            title="Get Involved with Us"
            description="Join our community and make a difference in young lives. Volunteer, mentor, or participate in our events."
            icon={<FiUsers className="text-white text-4xl" />}
            link="/GetInvolved"
          />
          <CTACard
            title="Learn More About Us"
            description="Discover our mission, impact, and the stories of the youth we've empowered through our programs."
            icon={<FiInfo className="text-white text-4xl" />}
            link="/About"
          />
          <CTACard
            title="Donate to Help the Cause"
            description="Your contribution can change lives. Support our initiatives to equip youth with essential life skills."
            icon={<FiHeart className="text-white text-4xl" />}
            link="/Donate"
          />
        </div>
      </div>
    </section>
  );
}