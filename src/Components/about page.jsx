/* ========================================
   UPDATED FILE: src/pages/About.jsx
   
   CHANGES:
   - Team photos now use /team/member1.jpg, etc.
   - You can add your own team photos to public/team/ folder
   - Update names, roles, and bios with your real team info
   
   Copy this entire code into src/pages/About.jsx
   ======================================== */

import React from 'react';
import { Target, Eye, Heart, Users, Award, Globe, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Team Member 1',
      role: 'CEO & Founder',
      image: '/team/member1.jpg', // Replace with your team photo
      bio: 'Add your team member bio here'
    },
    {
      name: 'Team Member 2',
      role: 'CTO',
      image: '/team/member2.jpg', // Replace with your team photo
      bio: 'Add your team member bio here'
    },
    {
      name: 'Team Member 3',
      role: 'Head of Operations',
      image: '/team/member3.jpg', // Replace with your team photo
      bio: 'Add your team member bio here'
    },
    {
      name: 'Team Member 4',
      role: 'Head of Product',
      image: '/team/member4.jpg', // Replace with your team photo
      bio: 'Add your team member bio here'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Animal Welfare First',
      description: 'We prioritize the health, comfort, and wellbeing of poultry above all else'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'Constantly developing cutting-edge solutions to solve real farming challenges'
    },
    {
      icon: Users,
      title: 'Farmer-Centric',
      description: 'Every decision we make puts small-scale farmers and their success first'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Building climate-adaptive solutions for a sustainable agricultural future'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-black mb-6">About Kiota Poultry</h1>
          <p className="text-xl opacity-90">
            A social enterprise revolutionizing small-scale poultry farming through technology and innovation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-xl p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower small-scale poultry farmers with accessible, affordable smart farming technology that enhances animal welfare, increases productivity, and builds climate resilience. We're committed to transforming traditional farming practices through innovation that makes a tangible difference in farmers' lives and livelihoods.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become Africa's leading smart agriculture platform, where every small-scale poultry farmer has access to technology that enables sustainable, profitable farming. We envision a future where data-driven insights and IoT solutions are standard tools for farmers adapting to climate change and market demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Story</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Kiota Poultry was founded in 2022 by a team of agricultural economists, IoT engineers, and passionate farmers who saw the challenges facing small-scale poultry producers firsthand. We witnessed how climate change, disease outbreaks, and lack of real-time data were affecting farm productivity and animal welfare.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We knew technology could help, but existing solutions were too expensive and complex for small-scale farmers. So we set out to build something different: affordable IoT sensors, intuitive mobile apps, and AI analytics specifically designed for the realities of Kenyan poultry farming.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we're proud to support over 500 farms across Kenya, monitoring more than 10 million birds and helping farmers increase their productivity by an average of 35% while reducing mortality rates by 15%. But we're just getting started.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all">
                <TrendingUp className="text-orange-600 mx-auto mb-4" size={40} />
                <div className="text-3xl font-black text-gray-800 mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Active Farms</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all">
                <Award className="text-green-600 mx-auto mb-4" size={40} />
                <div className="text-3xl font-black text-gray-800 mb-2">10M+</div>
                <div className="text-gray-600 font-semibold">Birds Monitored</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all">
                <Globe className="text-blue-600 mx-auto mb-4" size={40} />
                <div className="text-3xl font-black text-gray-800 mb-2">12</div>
                <div className="text-gray-600 font-semibold">Counties</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all">
                <Heart className="text-red-600 mx-auto mb-4" size={40} />
                <div className="text-3xl font-black text-gray-800 mb-2">98%</div>
                <div className="text-gray-600 font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Meet Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts dedicated to transforming poultry farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-black mb-4">Recognition & Awards</h2>
            <p className="text-xl opacity-90">Honored for our impact on agriculture and innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '2024', award: 'Best AgriTech Startup', org: 'Kenya Innovation Week' },
              { year: '2023', award: 'Social Impact Award', org: 'African Tech Summit' },
              { year: '2023', award: 'Climate Innovation Prize', org: 'UN Environment Program' }
            ].map((award, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
                <div className="text-4xl font-black mb-2">{award.year}</div>
                <h3 className="text-xl font-bold mb-2">{award.award}</h3>
                <p className="opacity-90">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;