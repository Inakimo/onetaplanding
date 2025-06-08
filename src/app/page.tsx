import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  Zap,
  Target,
  Award,
  DollarSign,
  Settings,
  Factory,
  Wrench,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header id="header" className="border-b border-gray-200 bg-white/95 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 lg:px-0 lg:py-0 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="#header">
                <Image src="/OneTapLogo.png" alt="Logo OneTap" width={100} height={50} />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#resultados" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Resultados
              </Link>
              <Link href="#servicios" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Servicios
              </Link>
              <Link href="#testimonios" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Testimonios
              </Link>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6">Consulta GRATIS</Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/factory.jpg')] bg-no-repeat bg-center bg-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-5xl mx-auto">
              <Badge className="mb-6 bg-orange-600/20 text-orange-400 border-orange-500/30 backdrop-blur-sm">
                🏭 Especialistas en Optimización Industrial
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-orange-500">Maximiza</span>
                <br />
                <span className="text-white">la Eficiencia</span>
                <br />
                <span className="text-gray-200">de tu Planta</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Incrementamos la productividad de plantas industriales en un{" "}
                <span className="font-bold text-orange-400">promedio del 25%</span> en menos de 90 días.
                <br />
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="#contacto">
                  <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                  >

                    Optimizar mi Planta Ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#testimonios">
                  <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-300 text-black hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                  >
                    Ver Casos de Éxito
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-gray-300 font-medium">Plantas Optimizadas</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                  <div className="text-gray-300 font-medium">Aumento Promedio</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$5.2M</div>
                  <div className="text-gray-300 font-medium">Ahorros Generados</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
                  <div className="text-gray-300 font-medium">Años Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="resultados" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Resultados Comprobados en la Industria</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transformamos operaciones industriales con metodologías probadas que generan impacto inmediato en la
                rentabilidad.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-4">+38%</div>
                  <h3 className="text-xl font-semibold mb-3">Eficiencia Operacional</h3>
                  <p className="text-gray-300">
                    Nuestros clientes incrementaron su eficiencia en promedio un 38% mediante optimización de líneas de producción.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-4">-42%</div>
                  <h3 className="text-xl font-semibold mb-3">Tiempo de Inactividad</h3>
                  <p className="text-gray-300">
                    Redujimos las paradas no programadas en un 42% con mantenimiento predictivo.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-4">ROI 270%</div>
                  <h3 className="text-xl font-semibold mb-3">Retorno de Inversión</h3>
                  <p className="text-gray-300">
                    Cada dólar invertido generó $2.70 en ahorros operativos y aumento de productividad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Servicios de Consultoría Industrial</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluciones especializadas diseñadas para maximizar el rendimiento de tu operación industrial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                    <Factory className="h-8 w-8 text-orange-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Optimización de Procesos</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Análisis integral de flujos productivos para eliminar desperdicios y maximizar throughput.
                  </p>

                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors">
                    <Settings className="h-8 w-8 text-slate-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mantenimiento Predictivo</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Implementación de sistemas IoT y analytics para prevenir fallas y optimizar mantenimiento.
                  </p>
                  <div className="flex items-center text-slate-600 font-semibold">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Reducción 40% paradas
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <TrendingUp className="h-8 w-8 text-blue-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Lean Manufacturing</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Implementación de metodologías Lean para eliminar desperdicios y mejorar flujo de valor.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Certificación incluida
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <Target className="h-8 w-8 text-green-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Control de Calidad</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Implementación de sistemas de control de calidad para reducir defectos y mejorar estándares.
                  </p>

                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                    <Wrench className="h-8 w-8 text-purple-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Automatización</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Diseño e implementación de soluciones de automatización para procesos críticos.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    ROI en 6 meses
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                    <Zap className="h-8 w-8 text-yellow-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Eficiencia Energética</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Auditorías energéticas y optimización de consumo para reducir costos operativos.
                  </p>
                  <div className="flex items-center text-yellow-600 font-semibold">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Ahorro 25% energía
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Testimonios de Directores Industriales
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    &#34;OneTap revolucionó nuestra planta. Aumentamos producción 45% y redujimos costos 35% en 2 meses. Su
                    expertise en manufactura es excepcional.&#34;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-slate-700 font-bold">JM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Juan Martínez</div>
                      <div className="text-gray-600">Director de Operaciones, MetalTech</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    &#34;El ROI fue inmediato. Su metodología Lean eliminó desperdicios que no veíamos. Recuperamos la
                    inversión en 3 semanas.&#34;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-700 font-bold">AR</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Ana Rodríguez</div>
                      <div className="text-gray-600">Gerente de Planta, ChemPro Industries</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    &#34;Profesionales de clase mundial. Su sistema de mantenimiento predictivo redujo paradas 50%. Altamente
                    recomendados.&#34;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-bold">CL</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Carlos López</div>
                      <div className="text-gray-600">VP Manufactura, AutoParts Corp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Urgency CTA */}
        <section id="contacto" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">

              <h2  className="text-4xl lg:text-5xl font-bold mb-6">¿Cuánta Productividad Estás Perdiendo?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Cada día de ineficiencia cuesta miles de dólares. Nuestros clientes ven resultados desde el primer
                mes.
              </p>

              <div className="bg-slate-700/50 backdrop-blur-md rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-slate-600">
                <h3 className="text-2xl font-bold mb-4">Diagnóstico Industrial GRATUITO</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                      type="email"
                      placeholder="Email del director de planta"
                      className="bg-slate-600/50 border-slate-500 text-white placeholder:text-gray-400 flex-1"
                  />
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8">
                    Solicitar Diagnóstico
                  </Button>
                </div>
                <p className="text-sm text-gray-300 mt-4">
                  ✅ Análisis de eficiencia operacional
                  <br />✅ Identificación de oportunidades de mejora
                  <br />✅ Estimación de ahorros potenciales
                </p>
              </div>

              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-orange-400" />
                  Resultados garantizados
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-green-400" />
                  Sin costo inicial
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">

                  <span className="text-2xl font-bold">OneTap</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Consultoría industrial especializada en optimización de procesos manufactureros.
                </p>
                <div className="flex items-center text-orange-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Resultados Comprobados</span>
                </div>
              </div>

              <div>
                <h4  className="font-bold mb-4 text-lg">Contacto Industrial</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-orange-400" />
                    <span>industrial@onetap.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-green-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                    <span>Zona Industrial Norte</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-lg">Especialidades</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Optimización de Procesos</li>
                  <li>• Lean Manufacturing</li>
                  <li>• Mantenimiento Predictivo</li>
                  <li>• Automatización Industrial</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-lg">Garantías</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Resultados en 90 días</li>
                  <li>• ROI garantizado</li>
                  <li>• Soporte post-implementación</li>
                  <li>• Diagnóstico gratuito</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} OneTap Industrial Consulting. Todos los derechos reservados.
                <span className="text-orange-400 font-semibold ml-2">Especialistas en Manufactura</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
  )
}
