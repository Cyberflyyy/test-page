import Link from "next/link"
import { ArrowRight, Code, MessageSquare, Zap, CheckCircle, Users, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProcessStep from "@/components/process-step"
import ProjectCard from "@/components/project-card"
import HeroAnimation from "@/components/hero-animation"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nawigacja */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-sky-500" />
            <span className="text-xl font-bold">FrontMaster</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#o-nas" className="text-sm font-medium hover:text-sky-500 transition-colors">
              O nas
            </Link>
            <Link href="#projekty" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Projekty
            </Link>
            <Link href="#proces" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Proces
            </Link>
            <Link href="#kontakt" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Kontakt
            </Link>
          </nav>
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500">
              Skontaktuj się
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">
        {/* Sekcja Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 py-12 md:py-20 lg:py-32">
          <div className="container px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex flex-col space-y-4 md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Tworzymy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
                  nowoczesne
                </span>{" "}
                strony internetowe
              </h1>
              <p className="text-base md:text-lg text-gray-600 md:pr-10">
                Specjalizujemy się w tworzeniu responsywnych, szybkich i estetycznych stron internetowych, które
                przyciągają klientów i zwiększają konwersję.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-500 text-white px-6 py-5 md:px-8 md:py-6">
                  Zobacz projekty
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-sky-200 hover:bg-sky-50 px-6 py-5 md:px-8 md:py-6">
                  Dowiedz się więcej
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative w-full mt-8 md:mt-0">
              <HeroAnimation />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Sekcja O nas */}
        <section id="o-nas" className="py-16 md:py-20 bg-white">
          <div className="container px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Kim jesteśmy?</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Jesteśmy zespołem pasjonatów tworzenia stron internetowych, którzy łączą kreatywność z najnowszymi
                technologiami.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-sky-50 to-white p-6 md:p-8 rounded-xl shadow-sm border border-sky-100 hover:shadow-md transition-all">
                <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                  <Zap className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Szybkość</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Tworzymy strony, które ładują się błyskawicznie, co przekłada się na lepsze doświadczenie użytkownika
                  i wyższe pozycje w wyszukiwarkach.
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-white p-6 md:p-8 rounded-xl shadow-sm border border-sky-100 hover:shadow-md transition-all">
                <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                  <PenTool className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Design</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Projektujemy strony, które nie tylko świetnie wyglądają, ale również są intuicyjne i przyjazne dla
                  użytkownika.
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-white p-6 md:p-8 rounded-xl shadow-sm border border-sky-100 hover:shadow-md transition-all sm:col-span-2 md:col-span-1">
                <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                  <Code className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Technologia</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Wykorzystujemy najnowsze technologie, które zapewniają niezawodność, bezpieczeństwo i łatwość
                  zarządzania stroną.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja Projekty */}
        <section id="projekty" className="py-16 md:py-20 bg-gradient-to-b from-white to-sky-50">
          <div className="container px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Nasze projekty</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Zobacz wybrane realizacje, które stworzyliśmy dla naszych klientów.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <ProjectCard
                title="E-commerce dla marki odzieżowej"
                description="Nowoczesny sklep internetowy z intuicyjnym procesem zakupowym"
                image="/placeholder.svg?height=400&width=600"
                tags={["Next.js", "Strapi", "Stripe"]}
              />

              <ProjectCard
                title="Strona dla kancelarii prawnej"
                description="Elegancka strona z systemem rezerwacji konsultacji online"
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "Node.js", "MongoDB"]}
              />

              <ProjectCard
                title="Portal informacyjny"
                description="Szybki i responsywny portal z zaawansowanym systemem CMS"
                image="/placeholder.svg?height=400&width=600"
                tags={["Next.js", "GraphQL", "PostgreSQL"]}
              />

              <ProjectCard
                title="Aplikacja dla firmy logistycznej"
                description="System do zarządzania flotą i śledzenia przesyłek"
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "Express", "Google Maps API"]}
              />

              <ProjectCard
                title="Strona dla restauracji"
                description="Strona z menu online i systemem rezerwacji stolików"
                image="/placeholder.svg?height=400&width=600"
                tags={["Next.js", "Tailwind CSS", "Supabase"]}
              />

              <ProjectCard
                title="Platforma edukacyjna"
                description="Interaktywna platforma do nauki programowania"
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "Firebase", "Monaco Editor"]}
              />
            </div>

            <div className="text-center mt-10 md:mt-12">
              <Button className="bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-500">
                Zobacz więcej projektów
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Sekcja Proces */}
        <section id="proces" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasz proces</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Poznaj etapy współpracy z nami - od pierwszej rozmowy do gotowej strony.
              </p>
            </div>

            <div className="space-y-12 max-w-3xl mx-auto">
              <ProcessStep
                number="01"
                title="Rozmowa i analiza potrzeb"
                description="Spotykamy się, aby dokładnie poznać Twoje potrzeby, cele biznesowe i oczekiwania. Analizujemy konkurencję i określamy grupę docelową."
                icon={<MessageSquare className="h-6 w-6" />}
              />

              <ProcessStep
                number="02"
                title="Projektowanie UX/UI"
                description="Tworzymy makiety i projekty graficzne, które odzwierciedlają charakter Twojej marki i spełniają oczekiwania użytkowników."
                icon={<PenTool className="h-6 w-6" />}
              />

              <ProcessStep
                number="03"
                title="Programowanie"
                description="Przekształcamy projekty w funkcjonalną stronę, dbając o czysty kod, optymalizację i zgodność z najnowszymi standardami."
                icon={<Code className="h-6 w-6" />}
              />

              <ProcessStep
                number="04"
                title="Testy i optymalizacja"
                description="Testujemy stronę pod kątem użyteczności, wydajności i kompatybilności z różnymi urządzeniami i przeglądarkami."
                icon={<CheckCircle className="h-6 w-6" />}
              />

              <ProcessStep
                number="05"
                title="Wdrożenie i wsparcie"
                description="Publikujemy stronę i zapewniamy wsparcie techniczne. Oferujemy również szkolenia z obsługi systemu CMS."
                icon={<Users className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>

        {/* Sekcja Kontakt */}
        <section id="kontakt" className="py-16 md:py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Skontaktuj się z nami</h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                  Masz pytania lub chcesz omówić swój projekt? Napisz do nas lub zadzwoń, a odpowiemy najszybciej jak to
                  możliwe.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">kontakt@frontmaster.pl</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">+48 123 456 789</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Warszawa, ul. Przykładowa 123</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-sky-100 mt-6 lg:mt-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Imię i nazwisko
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="text"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="email"
                        placeholder="jan@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Temat
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="text"
                      placeholder="Temat wiadomości"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      placeholder="Twoja wiadomość..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-500">
                    Wyślij wiadomość
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Stopka */}
      <footer className="bg-gradient-to-b from-sky-50 to-sky-100 py-10 md:py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold">FrontMaster</span>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Tworzymy nowoczesne strony internetowe, które pomagają naszym klientom osiągać ich cele biznesowe.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Usługi</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Strony internetowe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Sklepy internetowe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Aplikacje webowe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Optymalizacja SEO
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Firma</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link href="#o-nas" className="text-gray-600 hover:text-blue-500 transition-colors">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link href="#projekty" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Projekty
                  </Link>
                </li>
                <li>
                  <Link href="#proces" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Proces
                  </Link>
                </li>
                <li>
                  <Link href="#kontakt" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <Link href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>

                <Link href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400 h-5 w-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>

                <Link href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700 h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>

                <Link href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-500 h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-sky-200 mt-8 md:mt-12 pt-6 text-center text-gray-500 text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} FrontMaster. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
