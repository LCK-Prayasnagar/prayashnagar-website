import { Card } from '../../components/ui/card'

const BoardMembers = () => {
  const advisors = [
    {
      name: 'Dr. Robert Chen',
      position: 'Strategic Advisor',
      location: 'Silicon Valley',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      expertise: 'Technology & Innovation',
    },
    {
      name: 'Margaret Williams',
      position: 'Financial Advisor',
      location: 'New York',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face',
      expertise: 'Investment Strategy',
    },
    {
      name: 'James Rodriguez',
      position: 'Legal Advisor',
      location: 'Washington DC',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      expertise: 'Corporate Law',
    },
    {
      name: 'Dr. Lisa Thompson',
      position: 'Operations Advisor',
      location: 'Chicago',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      expertise: 'Process Optimization',
    },
  ]

  const leadership = [
    {
      name: 'Sarah Chen',
      position: 'President',
      location: 'New York',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face',
      isPresident: true,
    },
    {
      name: 'Michael Rodriguez',
      position: 'Vice President',
      location: 'San Francisco',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      isVicePresident: true,
    },
  ]

  const boardMembers = [
    {
      name: 'Jennifer Walsh',
      position: 'Board Member',
      location: 'Austin',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      department: 'Engineering',
    },
    {
      name: 'David Thompson',
      position: 'Board Member',
      location: 'Seattle',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      department: 'Technology',
    },
    {
      name: 'Lisa Anderson',
      position: 'Board Member',
      location: 'Chicago',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      department: 'Operations',
    },
    {
      name: 'Robert Kim',
      position: 'Board Member',
      location: 'Boston',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face',
      department: 'Finance',
    },
    {
      name: 'Maria Gonzalez',
      position: 'Board Member',
      location: 'Los Angeles',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
      department: 'Marketing',
    },
    {
      name: 'James Wilson',
      position: 'Board Member',
      location: 'Washington DC',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      department: 'Legal',
    },
    {
      name: 'Emily Carter',
      position: 'Board Member',
      location: 'Denver',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face',
      department: 'Human Resources',
    },
    {
      name: 'Alex Johnson',
      position: 'Board Member',
      location: 'Portland',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
      department: 'Innovation',
    },
    {
      name: 'Sophie Turner',
      position: 'Board Member',
      location: 'Miami',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
      department: 'Strategy',
    },
    {
      name: 'Thomas Brown',
      position: 'Board Member',
      location: 'Phoenix',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      department: 'Development',
    },
  ]

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-company-blue/10 via-company-blue/5 to-company-blue/20"
      style={{ backgroundColor: '#12184F' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-company-blue mb-1">
              OUR LEADERSHIP
            </h1>
          </div>
        </div>

        {/* Advisors Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-company-blue mb-4">ADVISORS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <Card
                key={advisor.name}
                className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-company-gold/30 bg-gradient-to-br from-company-gold/90 to-company-gold/70 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-6 text-center" style={{ backgroundColor: '#F5D186' }}>
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-company-blue/20">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-company-blue mb-2 group-hover:text-company-blue/80 transition-colors">
                    {advisor.name}
                  </h3>
                  <p className="text-sm font-medium text-company-blue/90 mb-1">
                    {advisor.position}
                  </p>
                  <p className="text-xs text-company-blue/70 italic mb-2">{advisor.location}</p>
                  <p className="text-xs text-company-blue/80 font-medium bg-company-blue/10 rounded-full px-3 py-1">
                    {advisor.expertise}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Board Members Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-company-blue mb-4">BOARD MEMBERS</h2>
          </div>

          {/* Leadership Row - President & Vice President */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-company-blue text-center mb-8">
              Executive Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {leadership.map((leader, index) => (
                <Card
                  key={leader.name}
                  className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-3 border-company-gold bg-gradient-to-br from-company-gold/95 to-company-gold/80 backdrop-blur-sm ring-4 ring-company-blue/20"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="p-8 text-center" style={{ backgroundColor: '#F5D186' }}>
                    <div className="relative mb-6">
                      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl ring-6 ring-company-blue/30">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div
                        className="absolute -top-4 -right-4 w-12 h-12 bg-company-blue rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: '#12184F' }}
                      >
                        <svg viewBox="0 0 24 24" className="w-7 h-7 text-company-gold fill-current">
                          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-company-blue mb-3 group-hover:text-company-blue/80 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-lg font-bold text-company-blue/90 mb-2 uppercase tracking-wide">
                      {leader.position}
                    </p>
                    <p className="text-sm text-company-blue/70 italic">{leader.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular Board Members */}
          <div>
            <h3 className="text-2xl font-bold text-company-blue text-center mb-8">Board Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {boardMembers.map((member, index) => (
                <Card
                  key={member.name}
                  className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-company-gold/40 bg-gradient-to-br from-company-gold/85 to-company-gold/65 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div className="p-5 text-center" style={{ backgroundColor: '#F5D186' }}>
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg ring-3 ring-company-blue/20">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-company-blue mb-1 group-hover:text-company-blue/80 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-sm font-medium text-company-blue/90 mb-1">
                      {member.position}
                    </p>
                    <p className="text-xs text-company-blue/70 italic mb-2">{member.location}</p>
                    <p className="text-xs text-company-blue/80 font-medium bg-company-blue/15 rounded-full px-2 py-1">
                      {member.department}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardMembers
