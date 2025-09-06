import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Download, ExternalLink, MessageCircle } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen animated-background">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/2 left-3/4 w-40 h-40 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/6 right-1/3 w-28 h-28 bg-gradient-to-br from-primary/8 to-accent/12 rounded-full blur-lg"></div>
        <div className="floating-element absolute bottom-1/4 left-1/6 w-36 h-36 bg-gradient-to-br from-accent/12 to-secondary/8 rounded-full blur-xl"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 animate-slide-in-left">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10 animate-pulse-glow">
              <AvatarImage src="/images/mohammed-photo.jpg" alt="Mohammed Vajahad" />
              <AvatarFallback>MV</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold">Mohammed Vajahad</h1>
              <p className="text-sm text-muted-foreground">Mechanical Engineer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </nav>
            <Button size="sm" className="hover:scale-105 transition-transform duration-300" asChild>
              <a href="/resume.txt" download="Mohammed_Vajahad_Resume.txt">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container max-w-4xl mx-auto text-center">
          <Avatar className="h-32 w-32 mx-auto mb-8 animate-fade-in-up animate-pulse-glow">
            <AvatarImage src="/images/mohammed-photo.jpg" alt="Mohammed Vajahad" />
            <AvatarFallback className="text-2xl">MV</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up [animation-delay:0.2s] opacity-0">
            Mohammed Vajahad
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance animate-fade-in-up [animation-delay:0.4s] opacity-0">
            Mechanical Engineer specializing in Solar Cell Production & Manufacturing at Tata Power Solar
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-fade-in-up [animation-delay:0.6s] opacity-0">
            Passionate Mechanical Engineer with expertise in PECVD cluster operations and boat management systems.
            Currently driving innovation in solar cell production at Tata Power Solar Private Limited, focusing on
            advanced manufacturing processes, quality optimization, and sustainable energy solutions. Dedicated to
            leveraging analytical skills and technical knowledge to advance product design and development in the
            renewable energy sector.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:0.8s] opacity-0">
            <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-300" asChild>
              <a href="mailto:vajahad2002@gmail.com">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/mohammed-vajahad-34184b264"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-card/30 backdrop-blur-sm relative z-10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Dedicated and hardworking professional with an adaptable personality and strong technical foundation.
                Currently serving as a Company Trainee at Tata Power Solar Private Limited, specializing in advanced
                solar cell production technologies. Working extensively with PECVD (Plasma-Enhanced Chemical Vapor
                Deposition) cluster systems and boat management operations, contributing to high-efficiency solar cell
                manufacturing processes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:9360280401" className="hover:underline">
                    9360280401
                  </a>
                </div>
                <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:vajahad2002@gmail.com" className="hover:underline">
                    vajahad2002@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>4/275, VOC nagar, Suthamali, Tirunelveli-627604</span>
                </div>
                <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/mohammed-vajahad-34184b264"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up [animation-delay:0.3s] opacity-0">
              <h3 className="text-xl font-semibold mb-4">Personal Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Troubleshooting",
                  "Critical thinking",
                  "Leadership",
                  "Team work",
                  "Self learning",
                  "Non Destructive Testing",
                ].map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="justify-center py-2 hover:scale-105 transition-transform duration-300 animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 relative z-10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Work Experience</h2>
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up [animation-delay:0.2s] opacity-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Company Trainee - Solar Cell Production</span>
                <Badge variant="secondary">July 2024 - Present</Badge>
              </CardTitle>
              <CardDescription>Tata Power Solar Private Limited, Tirunelveli</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>PECVD Cluster Operations:</strong> Operating and monitoring Plasma-Enhanced Chemical Vapor
                  Deposition systems for high-efficiency solar cell production
                </li>
                <li>
                  • <strong>Boat Management Specialization:</strong> Managing silicon wafer boat loading/unloading
                  processes, ensuring optimal production flow and quality control
                </li>
                <li>
                  • <strong>Preventive Maintenance (PM):</strong> Collaborating with maintenance teams on scheduled
                  equipment maintenance, reducing downtime and improving operational efficiency
                </li>
                <li>
                  • <strong>Vendor Coordination:</strong> Supporting equipment installation projects by working closely
                  with vendors during machine setup and commissioning phases
                </li>
                <li>
                  • <strong>Process Optimization:</strong> Contributing to continuous improvement initiatives in solar
                  cell manufacturing processes
                </li>
                <li>
                  • <strong>Quality Assurance:</strong> Implementing quality control measures and monitoring production
                  parameters to maintain high-standard solar cell output
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-card/30 backdrop-blur-sm relative z-10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Education</h2>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up [animation-delay:0.2s] opacity-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>B.E. Mechanical Engineering</span>
                  <Badge variant="secondary">2020-2024</Badge>
                </CardTitle>
                <CardDescription>Anna University Regional Campus, Tirunelveli</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">CGPA: 8.23</span>
                  <span className="text-muted-foreground">Secured percentage: 82.3%</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-left [animation-delay:0.4s] opacity-0">
                <CardHeader>
                  <CardTitle>HSC (2019-2020)</CardTitle>
                  <CardDescription>Our Own Modern Matric Hr.Sec.School, Tirunelveli</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-lg font-semibold">68%</span>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up [animation-delay:0.6s] opacity-0">
                <CardHeader>
                  <CardTitle>SSLC (2017-2018)</CardTitle>
                  <CardDescription>Our Own Modern Matric Hr.Sec.School, Tirunelveli</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-lg font-semibold">80.2%</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 relative z-10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-left [animation-delay:0.2s] opacity-0">
              <CardHeader>
                <CardTitle>Multi-functional Wheelchair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">
                  A dynamic mobility solution for adaptability and convenience. Features ergonomic design and intuitive
                  controls which facilitates smooth navigation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up [animation-delay:0.4s] opacity-0">
              <CardHeader>
                <CardTitle>Plant Disease Detection through Robotic Devices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">
                  With simple photograph of a plant captured through this device identifies the plant's disease.
                  Integrates advanced image processing algorithms to analyse plant diseases accurately at earlier stage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-card/30 backdrop-blur-sm relative z-10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-left [animation-delay:0.2s] opacity-0">
              <CardHeader>
                <CardTitle className="text-primary">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["CREO - Part modelling", "Ansys - Mechanical APDL", "AutoCAD", "MS Office"].map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="w-full justify-center py-2 hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up [animation-delay:0.4s] opacity-0">
              <CardHeader>
                <CardTitle className="text-primary">Industrial Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Total Productive Maintenance", "Total Quality Management", "Six Sigma", "Root cause analysis"].map(
                    (skill, index) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="w-full justify-center py-2 hover:scale-105 transition-transform duration-300"
                        style={{ animationDelay: `${0.1 * index}s` }}
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-left [animation-delay:0.6s] opacity-0">
              <CardHeader>
                <CardTitle className="text-primary">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Comprehensive course on IOT</p>
                  <p>• Design course on Electric Vehicle for Mechanical Engineers</p>
                  <p>• Industry 4.0 and its applications</p>
                  <p>• Integrated Manufacturing - NPTEL</p>
                  <p>• Soft skills in UNXT</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industrial Exposure */}
      <section className="py-16 px-4 relative z-10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Industrial Exposure</h2>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-left [animation-delay:0.2s] opacity-0">
              <CardHeader>
                <CardTitle>Internship at National Small Industrial Corporation</CardTitle>
                <CardDescription>Guindy, Chennai</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">
                  Learnt designing and manufacturing process of Drones which includes Solid works, CATIA and basic PLC
                  programming.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up [animation-delay:0.4s] opacity-0">
              <CardHeader>
                <CardTitle>Internship at Southern Railways</CardTitle>
                <CardDescription>Ernakulam, Kerala</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">
                  Learnt insights of railway systems and its operations and also had practical experience in
                  maintenance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-card/30 backdrop-blur-sm relative z-10">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty animate-fade-in-up [animation-delay:0.2s] opacity-0">
            I'm always interested in discussing new opportunities in mechanical engineering, renewable energy
            technologies, solar cell manufacturing, and innovative product development. Let's connect to explore how we
            can collaborate on advancing sustainable energy solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:0.4s] opacity-0">
            <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-300" asChild>
              <a href="mailto:vajahad2002@gmail.com">
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a href="https://wa.me/919360280401" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/mohammed-vajahad-34184b264"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t animate-fade-in-up relative z-10">
        <div className="container max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Mohammed Vajahad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
