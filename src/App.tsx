import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  TrendingUp, 
  Shield, 
  Award, 
  Globe, 
  Users, 
  BarChart3,
  Smartphone,
  Monitor,
  BookOpen,
  HeadphonesIcon,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Play,
  Check,
  Star,
  Search,
  User,
  Settings
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <span>Risk Warning: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">EN</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-400 transition-colors">Client Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" 
                  alt="FXPro" 
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Trading
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Forex Trading</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Shares</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Indices</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Commodities</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Cryptocurrencies</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Futures</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Platforms
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">MetaTrader 5</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">MetaTrader 4</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">cTrader</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">FXPro Edge</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">WebTrader</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Mobile Trading</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Accounts
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Account Types</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Islamic Accounts</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Professional Clients</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Demo Account</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Tools & Education
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Trading Tools</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Economic Calendar</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Market Analysis</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Trading Academy</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Webinars</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Glossary</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About FXPro
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Why FXPro</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Regulation & Licensing</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Awards</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Company News</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Careers</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Contact Us</a>
                  </div>
                </div>
              </div>

              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Partnership
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-600" />
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Client Login
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Open Account
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-white">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Trading</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Platforms</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Accounts</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Tools & Education</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">About FXPro</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Partnership</a>
              <div className="pt-4 border-t">
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                  Client Login
                </button>
                <button className="block w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Open Account
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Trade with the
                <span className="text-yellow-400 block">Global Leader</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Access 2000+ instruments across 6 asset classes with award-winning platforms, 
                competitive spreads, and lightning-fast execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors">
                  Start Trading
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Try Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">2M+</div>
                  <div className="text-blue-200 text-sm">Clients Worldwide</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">17+</div>
                  <div className="text-blue-200 text-sm">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">2000+</div>
                  <div className="text-blue-200 text-sm">Instruments</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                alt="Trading Platform"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Live Markets</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">+$2,847.50</div>
                <div className="text-sm text-gray-600">Today's P&L</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Prices Ticker */}
      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto">
            <div className="flex items-center space-x-8 min-w-max">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">EUR/USD</span>
                <span className="text-lg font-bold">1.08564</span>
                <span className="text-sm text-green-400">+0.0012</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">GBP/USD</span>
                <span className="text-lg font-bold">1.26431</span>
                <span className="text-sm text-red-400">-0.0023</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">USD/JPY</span>
                <span className="text-lg font-bold">149.825</span>
                <span className="text-sm text-green-400">+0.45</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">Gold</span>
                <span className="text-lg font-bold">2012.45</span>
                <span className="text-sm text-green-400">+8.23</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">US30</span>
                <span className="text-lg font-bold">37,248</span>
                <span className="text-sm text-green-400">+124</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FXPro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FXPro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by millions of traders worldwide, FXPro offers unparalleled trading conditions and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulated & Secure</h3>
              <p className="text-gray-600">
                Authorised and regulated by FCA, CySEC, FSCA, and SCB with segregated client funds
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Award-Winning</h3>
              <p className="text-gray-600">
                60+ industry awards recognising our excellence in trading services and innovation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Superior Execution</h3>
              <p className="text-gray-600">
                Lightning-fast execution with no requotes and 99.9% order fill rate
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/5 Support</h3>
              <p className="text-gray-600">
                Multilingual customer support from trading experts available 24/5
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Award-Winning Trading Platforms</h2>
            <p className="text-xl text-gray-600">
              Choose from our suite of powerful platforms designed for every trading style
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MetaTrader 5</h3>
              <p className="text-gray-600 mb-6">
                The world's most popular multi-asset platform with advanced charting and automated trading
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Advanced charting package</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Algorithmic trading</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Multi-asset trading</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Download MT5
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">cTrader</h3>
              <p className="text-gray-600 mb-6">
                Professional ECN platform with advanced order types and level II pricing
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">ECN execution</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Level II pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Advanced order types</span>
                </li>
              </ul>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Download cTrader
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FXPro Mobile</h3>
              <p className="text-gray-600 mb-6">
                Trade on the go with our award-winning mobile apps for iOS and Android
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">iOS & Android apps</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Push notifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Biometric security</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Account Types</h2>
            <p className="text-xl text-gray-600">
              Choose the account that best suits your trading style and experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MT5</h3>
                <p className="text-gray-600 mb-4">Market Maker</p>
                <div className="text-4xl font-bold text-blue-600">$100</div>
                <div className="text-sm text-gray-600">Minimum Deposit</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Spreads from 1.8 pips</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">No commission</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Instant execution</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Negative balance protection</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Open MT5 Account
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">cTrader</h3>
                <p className="text-blue-100 mb-4">ECN</p>
                <div className="text-4xl font-bold text-yellow-400">$100</div>
                <div className="text-sm text-blue-200">Minimum Deposit</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-blue-50">Spreads from 0.0 pips</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-blue-50">Commission from $45/lot</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-blue-50">Market execution</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-blue-50">Level II pricing</span>
                </li>
              </ul>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-3 rounded-lg font-semibold transition-colors">
                Open cTrader Account
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-500 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MT5 Markets</h3>
                <p className="text-gray-600 mb-4">DMA</p>
                <div className="text-4xl font-bold text-purple-600">$100</div>
                <div className="text-sm text-gray-600">Minimum Deposit</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Spreads from 0.0 pips</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Commission from $45/lot</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Market execution</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Direct market access</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Open Markets Account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Instruments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2000+ Instruments Across 6 Asset Classes</h2>
            <p className="text-xl text-gray-600">
              Trade forex, shares, indices, commodities, cryptocurrencies, and futures
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Forex</h3>
              <p className="text-sm text-gray-600">70+ pairs</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Shares</h3>
              <p className="text-sm text-gray-600">1800+ stocks</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Indices</h3>
              <p className="text-sm text-gray-600">20+ indices</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Commodities</h3>
              <p className="text-sm text-gray-600">Metals & Energy</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Crypto</h3>
              <p className="text-sm text-gray-600">20+ pairs</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Futures</h3>
              <p className="text-sm text-gray-600">50+ contracts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trading Education & Tools</h2>
            <p className="text-xl text-gray-600">
              Enhance your trading knowledge with our comprehensive educational resources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                alt="Trading Academy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">ACADEMY</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trading Academy</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive courses covering everything from basics to advanced strategies
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg"
                alt="Market Analysis"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">ANALYSIS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Market Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Daily market insights and technical analysis from our expert team
                </p>
                <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2">
                  Read Analysis
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg"
                alt="Trading Tools"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">TOOLS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trading Tools</h3>
                <p className="text-gray-600 mb-4">
                  Advanced calculators, economic calendar, and market sentiment tools
                </p>
                <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2">
                  Explore Tools
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" 
                  alt="FXPro" 
                  className="h-8 w-auto mr-3"
                />
                <span className="text-2xl font-bold">FXPro</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                FXPro is a leading global forex and CFD broker, serving traders worldwide since 2006. 
                We are authorised and regulated by FCA, CySEC, FSCA, and SCB.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Star className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Trading</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Forex</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shares</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Indices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commodities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cryptocurrencies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Futures</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Platforms</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">MetaTrader 5</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MetaTrader 4</a></li>
                <li><a href="#" className="hover:text-white transition-colors">cTrader</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FXPro Edge</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WebTrader</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span>+44 20 7617 7777</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span>info@fxpro.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <HeadphonesIcon className="h-4 w-4" />
                  <span>24/5 Live Chat</span>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 lg:mb-0">
                <a href="#" className="hover:text-white transition-colors">Legal Documents</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
              </div>
              <p className="text-gray-400 text-sm">
                © 2025 FXPro Financial Services Ltd. All rights reserved.
              </p>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              <p>
                Risk Warning: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 
                73.77% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether 
                you understand how CFDs work and whether you can afford to take the high risk of losing your money.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;