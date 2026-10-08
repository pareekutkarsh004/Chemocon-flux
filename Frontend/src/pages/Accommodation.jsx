import { Layout } from "@/components/layout/Layout";
import { Utensils, Home, CheckCircle, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Accommodation = () => {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative hero-section-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Accommodation & Food
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Details regarding your stay and meals during CHEM-CONFLUX²⁶
          </p>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Utensils className="w-8 h-8 text-orange-500" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              Food Arrangements
            </h2>
          </div>
          <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl p-8 shadow-lg">
            <p className="text-muted-foreground text-lg mb-6">
              The conference includes a comprehensive meal plan to keep you energized throughout the event:
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-orange-500/10 rounded-xl p-6 text-center border border-orange-500/20 flex flex-col justify-center">
                <div className="text-xl font-bold text-orange-500 mb-4 border-b border-orange-500/20 pb-2">Day 1</div>
                <div className="space-y-2 text-foreground font-medium">
                  <p>High Tea</p>
                  <p>Lunch</p>
                  <p>Gala Dinner</p>
                </div>
              </div>
              <div className="bg-orange-500/10 rounded-xl p-6 text-center border border-orange-500/20 flex flex-col justify-center">
                <div className="text-xl font-bold text-orange-500 mb-4 border-b border-orange-500/20 pb-2">Day 2</div>
                <div className="space-y-2 text-foreground font-medium">
                  <p>Breakfast</p>
                  <p>Lunch</p>
                </div>
              </div>
              <div className="bg-orange-500/10 rounded-xl p-6 text-center border border-orange-500/20 flex flex-col justify-center">
                <div className="text-xl font-bold text-orange-500 mb-4 border-b border-orange-500/20 pb-2">Day 3</div>
                <div className="space-y-2 text-foreground font-medium">
                  <p>Breakfast</p>
                  <p>Lunch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-20 bg-muted dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-8 h-8 text-orange-500" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              Accommodation (Outside Campus)
            </h2>
          </div>

          <div className="bg-blue-500/10 dark:bg-blue-500/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-10">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
              <p className="text-muted-foreground">
                Due to limited accommodation availability inside the MNNIT campus, participants who are unable to avail on-campus accommodation may make their arrangements through the hotels listed below. Special accommodation rates have been arranged for faculty members, delegates, and guests attending MNNIT Prayagraj, CHEM-CONFLUX²⁶, scheduled from 22–24 October 2026.
              </p>
            </div>
            <p className="mt-4 font-semibold text-foreground ml-10">
              Important: While booking, please mention "MNNIT Prayagraj – CHEM CONFLUX 2026" to avail the special conference rates.
            </p>
          </div>

          <div className="space-y-12">
            {/* Hotel Harmony */}
            <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">1. Hotel Harmony Prayagraj</h3>
                  <a href="https://maps.google.com/?q=Hotel+Harmony+Prayagraj" target="_blank" rel="noreferrer" className="flex items-center text-primary hover:underline text-sm font-medium mb-4">
                    <MapPin className="w-4 h-4 mr-1" /> View on Google Maps
                  </a>
                </div>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted dark:bg-white/10">
                      <th className="p-3 border border-border font-semibold text-foreground">Occupancy</th>
                      <th className="p-3 border border-border font-semibold text-foreground">Special rate per room per night</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">Single occupancy</td>
                      <td className="p-3 border border-border text-muted-foreground">₹1,500</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">Double occupancy</td>
                      <td className="p-3 border border-border text-muted-foreground">₹1,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-4"><strong>Taxes:</strong> Extra, as applicable under prevailing government regulations.</p>

              <div className="bg-muted/50 dark:bg-white/5 p-4 rounded-xl border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">For direct booking:</h4>
                <p className="text-muted-foreground">Ms. Preetu Shukla</p>
                <p className="text-muted-foreground">Hotel Harmony, Prayagraj. Mobile: <strong>+91 79050 82076</strong></p>
              </div>
            </div>

            {/* Hotel Kanha Shyam */}
            <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">2. Hotel Kanha Shyam Prayagraj</h3>
                  <a href="https://maps.google.com/?q=Hotel+Kanha+Shyam+Prayagraj" target="_blank" rel="noreferrer" className="flex items-center text-primary hover:underline text-sm font-medium mb-4">
                    <MapPin className="w-4 h-4 mr-1" /> View on Google Maps
                  </a>
                </div>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted dark:bg-white/10">
                      <th className="p-3 border border-border font-semibold text-foreground">Room category</th>
                      <th className="p-3 border border-border font-semibold text-foreground">Special rate per room per night</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Deluxe Single", price: "₹4,500" },
                      { type: "Deluxe Double", price: "₹5,500" },
                      { type: "Royal Club Single", price: "₹5,500" },
                      { type: "Royal Club Double", price: "₹6,500" },
                      { type: "Chamber Single/Double", price: "₹8,000" },
                      { type: "Junior Suite Single/Double", price: "₹10,000" },
                      { type: "Suite Single/Double", price: "₹20,000" },
                      { type: "Extra person", price: "₹1,500" },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="p-3 border border-border text-muted-foreground">{row.type}</td>
                        <td className="p-3 border border-border text-muted-foreground">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-4"><strong>Taxes:</strong> GST will be charged additionally according to prevailing government regulations.</p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">The room rates include:</h4>
                <ul className="space-y-2">
                  {[
                    "Daily buffet or fixed-menu breakfast",
                    "Complimentary Wi-Fi for up to two devices",
                    "Tea/coffee-making facilities",
                    "Two litres of packaged drinking water daily",
                    "Use of the fitness centre, yoga room, and steam-bath facilities",
                    "Standard in-room amenities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 bg-muted/50 dark:bg-white/5 p-6 rounded-xl border border-border/50">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">For direct booking:</h4>
                  <p className="text-muted-foreground text-sm mb-1"><strong>Email:</strong> <a href="mailto:info@hotelkanhashyam.com" className="text-primary hover:underline">info@hotelkanhashyam.com</a> <br/>or <a href="mailto:sales@hotelkanhashyam.com" className="text-primary hover:underline">sales@hotelkanhashyam.com</a></p>
                  <p className="text-muted-foreground text-sm mb-3"><strong>Website:</strong> <a href="http://www.hotelkanhashyam.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.hotelkanhashyam.com</a></p>
                  <p className="text-xs text-muted-foreground">Bookings should be sent in writing from an official email address (Hotel). The special rates are not applicable when more than three rooms are booked under a single name for the same date.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Check-in / Check-out</h4>
                    <p className="text-muted-foreground text-sm">Check-in: 1:00 PM <br/> Check-out: 11:00 AM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Cancellation</h4>
                    <p className="text-muted-foreground text-xs">Cancellations should be made at least 48 hours before arrival. Late cancellation or non-arrival may attract retention charges according to the hotel policy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Booking Info */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" /> Booking Information***
              </h3>
              <ul className="space-y-3">
                {[
                  "Participants must make reservations and payments directly with the selected hotel.",
                  "Please mention \"MNNIT Prayagraj, CHEM-CONFLUX²⁶\" at the time of booking.",
                  "Special rates are subject to room availability.",
                  "Applicable taxes and any additional services will be charged directly by the hotel.",
                  "Participants requiring a GST-compliant invoice should provide their institutional or company GSTIN before billing."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accommodation;
