import { Phone, MapPin, Bed, Users, DollarSign, Wifi, Tv, Wind, Star, MessageCircle, Calendar, ChevronRight } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-sea-foam">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-dark/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white font-display">მჯმ ჰოტელი</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#rooms" className="text-white/80 hover:text-white transition-colors">ოთახები</a>
              <a href="#location" className="text-white/80 hover:text-white transition-colors">ლოკაცია</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">კონტაქტი</a>
            </div>
            <a
              href="tel:+995599431036"
              className="bg-gold text-ocean-dark px-4 py-2 rounded-lg font-medium hover:bg-gold/90 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">დაჯავშნე</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-display animate-fade-in-up">
            შენი სახლი ზღვასთან
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-white/90">
            25 ოთახი · 70 საწოლი · 60₾-დან
          </p>
          <p className="text-lg text-white/80 mb-8">
            საოჯახო სასტუმრო ქობულეთის ცენტრში
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/995599431036"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-ocean-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold/90 transition-all hover:scale-105 animate-pulse-slow flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              დაჯავშნე WhatsApp-ით
            </a>
            <a
              href="tel:+995599431036"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (+995) 599 43 10 36
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>თამარ მეფის ქ. 4</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>568 25 45 00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Why Us */}
      <section className="py-20 bg-sea-foam">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-ocean-dark mb-12 font-display">
            რატომ მჯმ ჰოტელი?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-ocean/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bed className="w-7 h-7 text-ocean" />
              </div>
              <h3 className="text-2xl font-bold text-ocean-dark mb-1">25</h3>
              <p className="text-gray-600">ოთახი</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-ocean-dark mb-1">60₾</h3>
              <p className="text-gray-600">-დან</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-ocean/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-ocean" />
              </div>
              <h3 className="text-xl font-bold text-ocean-dark mb-1">ცენტრი</h3>
              <p className="text-gray-600">ქობულეთი</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-trust-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-trust-green" />
              </div>
              <h3 className="text-xl font-bold text-ocean-dark mb-1">ოჯახური</h3>
              <p className="text-gray-600">ატმოსფერო</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-ocean-dark mb-12 font-display">
            ჩვენი ოთახები
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Economy Room */}
            <div className="bg-sea-foam rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80')`,
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-ocean-dark mb-2">ეკონომი</h3>
                <p className="text-gray-600 mb-4">2-3 საწოლი · კომფორტული</p>
                <div className="flex items-center gap-4 mb-4">
                  <Wifi className="w-5 h-5 text-ocean" />
                  <Tv className="w-5 h-5 text-ocean" />
                  <Wind className="w-5 h-5 text-ocean" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold font-accent">60-70₾</span>
                  <span className="text-gray-500">/ღამე</span>
                </div>
              </div>
            </div>

            {/* Standard Room */}
            <div className="bg-sea-foam rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80')`,
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-ocean-dark mb-2">სტანდარტი</h3>
                <p className="text-gray-600 mb-4">2-4 საწოლი · პრემიუმ კომფორტი</p>
                <div className="flex items-center gap-4 mb-4">
                  <Wifi className="w-5 h-5 text-ocean" />
                  <Tv className="w-5 h-5 text-ocean" />
                  <Wind className="w-5 h-5 text-ocean" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold font-accent">70-85₾</span>
                  <span className="text-gray-500">/ღამე</span>
                </div>
              </div>
            </div>

            {/* Family Room */}
            <div className="bg-sea-foam rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80')`,
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-ocean-dark mb-2">ფამილი</h3>
                <p className="text-gray-600 mb-4">4-6 საწოლი · იდეალური ოჯახისთვის</p>
                <div className="flex items-center gap-4 mb-4">
                  <Wifi className="w-5 h-5 text-ocean" />
                  <Tv className="w-5 h-5 text-ocean" />
                  <Wind className="w-5 h-5 text-ocean" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold font-accent">85-100₾</span>
                  <span className="text-gray-500">/ღამე</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-cloud-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-ocean-dark mb-12 font-display">
            სად ვართ
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.5!2d41.82!3d41.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ5JzEyLjAiTiA0McKwNDknMTIuMCJF!5e0!3m2!1ska!2sge!4v1600000000000!5m2!1ska!2sge"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-ocean" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ocean-dark mb-1">მისამართი</h3>
                  <p className="text-gray-600">თამარ მეფის ქუჩა 4, ქობულეთი</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bed className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ocean-dark mb-1">პლაჟამდე</h3>
                  <p className="text-gray-600">~5 წუთი ფეხით</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-trust-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-trust-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ocean-dark mb-1">ბათუმამდე</h3>
                  <p className="text-gray-600">25 კმ (30 წუთი მანქანით)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-ocean-dark mb-12 font-display">
            სტუმრების შეფასებები
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-sea-foam rounded-2xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "ძალიან სუფთა და კომფორტული ოთახები. მასპინძლები ძალიან მეგობრულები იყვნენ. ზღვასთან ახლოსაა, ყველაფერი საჭირო ადგილას."
              </p>
              <p className="font-bold text-ocean-dark">— ნინო კ.</p>
            </div>
            <div className="bg-sea-foam rounded-2xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "ოჯახთან ერთად დავისვენეთ. ფასი და ხარისხი შესანიშნავია. კონდიციონერი, ტელევიზორი, ვაიფაი — ყველაფერი მუშაობს."
              </p>
              <p className="font-bold text-ocean-dark">— გიორგი მ.</p>
            </div>
            <div className="bg-sea-foam rounded-2xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "მესამედ ვაპირებთ მისვლას. ქობულეთში საუკეთესო ფასი-ხარისხის თანაფარდობა. გირჩევთ!"
              </p>
              <p className="font-bold text-ocean-dark">— თამარ ლ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ocean to-ocean-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-display">
            დაჯავშნე შენი ზაფხული
          </h2>
          <p className="text-xl text-white/90 mb-8">
            ზაფხულის ოთახები სწრაფად ივსება — არ გამოტოვო შანსი!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/995599431036"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-trust-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-trust-green/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp-ით დაჯავშნა
            </a>
            <a
              href="tel:+995599431036"
              className="bg-white text-ocean-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (+995) 599 43 10 36
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-sea-foam">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-ocean-dark mb-12 font-display">
            დაგვიკავშირდით
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-ocean/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-ocean" />
              </div>
              <h3 className="text-xl font-bold text-ocean-dark mb-2">ტელეფონი</h3>
              <a href="tel:+995599431036" className="text-ocean hover:underline block mb-1">
                (+995) 599 43 10 36
              </a>
              <a href="tel:+995568254500" className="text-ocean hover:underline">
                (+995) 568 25 45 00
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-trust-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-trust-green" />
              </div>
              <h3 className="text-xl font-bold text-ocean-dark mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/995599431036"
                target="_blank"
                rel="noopener noreferrer"
                className="text-trust-green hover:underline"
              >
                (+995) 599 43 10 36
              </a>
              <p className="text-gray-500 text-sm mt-2">დაჯავშნა 24/7</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-ocean-dark mb-2">მისამართი</h3>
              <p className="text-gray-600">
                თამარ მეფის ქუჩა 4<br />
                ქობულეთი, აჭარა
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-dark py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">მჯმ ჰოტელი</h3>
              <p className="text-white/70">
                შენი სახლი ზღვასთან<br />
                25 ოთახი · 70 საწოლი · ქობულეთი
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">სწრაფი ბმულები</h4>
              <ul className="space-y-2">
                <li><a href="#rooms" className="text-white/70 hover:text-white transition-colors">ოთახები</a></li>
                <li><a href="#location" className="text-white/70 hover:text-white transition-colors">ლოკაცია</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">კონტაქტი</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">საკონტაქტო</h4>
              <p className="text-white/70 mb-2">(+995) 599 43 10 36</p>
              <p className="text-white/70">თამარ მეფის ქ. 4, ქობულეთი</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} მჯმ ჰოტელი | ყველა უფლება დაცულია
            </p>
            <p className="text-white/60 text-sm">
              შექმნილია <span className="text-gold">SiTech</span>-ის მიერ
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
