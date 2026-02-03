import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SalesPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 14, seconds: 52 });
  const [selectedBundle, setSelectedBundle] = useState<number>(2); // 1 = Starter, 2 = Best Value, 3 = Stock Up

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  const scrollToPricing = () => {
    const section = document.getElementById('pricing');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden selection:bg-primary/30">
      <Header variant="sales" />
      
      <main className="flex flex-col w-full pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 text-left order-2 lg:order-1">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>)}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Trusted by 50,000+ Women over 45</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-medium leading-tight tracking-tight">
                  Unlock Your <span className="text-primary italic">Youthful Glow</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                  Advanced botanical hydration designed specifically for mature skin. Restore firmness and reclaim your radiance with our gold-standard formulas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button onClick={scrollToPricing} className="flex items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/25">
                    Shop Bundle Offers
                  </button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] w-full rounded-2xl bg-cream overflow-hidden shadow-2xl relative border-8 border-white/50">
                  <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-gold/20">
                    <p className="text-xs font-bold text-gold uppercase tracking-wider">Editor's Choice</p>
                  </div>
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX63equjO5XU7YNLFlX04t-5JJVwhDtFeoI3zavqQPwKRByoNJ_7gAIFY0jUp5eJ34cydE4DbkX9gZJHAndKt84PocBLPjrMETrdStKsu_-j_qHh58F1yRD24FLLvVNPcDvuQBYviYytx-OsHpbo9mwYqYsZU4slMAB27aKrzFbHRTeHhpHUuxuGjnu143N9YUEoAqIXCDRg1PhK5xzDg1kc9dpUsnAnjCHMrwSpAGd7mqNOaHPOQzjulUfCs05ej6Kd58sSS0NhE")' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Timer */}
        <div className="bg-gold/10 border-y border-gold/20 py-3">
          <div className="mx-auto max-w-7xl px-4 flex justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-widest">
              <span className="material-symbols-outlined animate-pulse">timer</span>
              <span>Limited Time Offer Ends In:</span>
            </div>
            <div className="flex gap-4 font-serif text-xl font-bold text-slate-800">
              <div className="flex flex-col items-center"><span className="bg-white px-2 py-1 rounded shadow-sm border border-gold/20">{formatTime(timeLeft.hours)}</span><span className="text-[10px] uppercase font-sans tracking-tighter text-slate-400">Hrs</span></div>
              <div className="flex flex-col items-center"><span className="bg-white px-2 py-1 rounded shadow-sm border border-gold/20">{formatTime(timeLeft.minutes)}</span><span className="text-[10px] uppercase font-sans tracking-tighter text-slate-400">Min</span></div>
              <div className="flex flex-col items-center"><span className="bg-white px-2 py-1 rounded shadow-sm border border-gold/20">{formatTime(timeLeft.seconds)}</span><span className="text-[10px] uppercase font-sans tracking-tighter text-slate-400">Sec</span></div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="py-24 bg-cream" id="pricing">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-slate-900">Choose Your Radiant Ritual</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Join thousands of women who have transformed their skin. Select our "Buy 2 Get 1 Free" bundle for the best results and savings.</p>
            </div>

            {/* Comparison Table for Mobile/Tablet */}
            <div className="max-w-4xl mx-auto mb-16 overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-sm hidden md:block">
              <div className="grid grid-cols-4 bg-slate-50 border-b border-gold/10 p-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <div>Package</div>
                <div className="text-center">Daily Cost</div>
                <div className="text-center">Savings</div>
                <div className="text-right">Price</div>
              </div>
              <div className={`grid grid-cols-4 p-5 items-center border-b border-slate-50 cursor-pointer ${selectedBundle === 1 ? 'bg-slate-50' : ''}`} onClick={() => setSelectedBundle(1)}>
                <div className="font-bold text-slate-700">1 Jar (Starter)</div>
                <div className="text-center text-slate-600">$1.96</div>
                <div className="text-center text-slate-400">--</div>
                <div className="text-right font-bold text-slate-900">$59</div>
              </div>
              <div className={`grid grid-cols-4 p-5 items-center border-l-4 cursor-pointer ${selectedBundle === 2 ? 'bg-gold/5 border-gold' : 'border-transparent'}`} onClick={() => setSelectedBundle(2)}>
                <div className="font-bold text-gold">3 Jars (Buy 2 Get 1)</div>
                <div className="text-center text-slate-600 font-bold">$1.31</div>
                <div className="text-center text-green-600 font-bold">Save 33%</div>
                <div className="text-right font-bold text-slate-900">$118</div>
              </div>
              <div className={`grid grid-cols-4 p-5 items-center cursor-pointer ${selectedBundle === 3 ? 'bg-slate-50' : ''}`} onClick={() => setSelectedBundle(3)}>
                <div className="font-bold text-slate-700">6 Jars (Stock Up)</div>
                <div className="text-center text-slate-600">$1.10</div>
                <div className="text-center text-green-600 font-bold">Save 44%</div>
                <div className="text-right font-bold text-slate-900">$198</div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              
              {/* Option 1 */}
              <div onClick={() => setSelectedBundle(1)} className={`bg-white rounded-2xl p-8 border ${selectedBundle === 1 ? 'border-primary ring-2 ring-primary/20' : 'border-gold/10'} shadow-sm flex flex-col transition-all hover:shadow-md cursor-pointer`}>
                <h3 className="text-xl font-bold mb-1 text-slate-800">Sampler</h3>
                <p className="text-xs text-slate-400 mb-6 uppercase tracking-widest">30 Day Supply</p>
                <div className="aspect-square w-32 mx-auto bg-slate-50 rounded-full mb-8 bg-cover bg-center border border-slate-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6dG_gsIYESxiUielRj5oL1HZ2xG23E6m_QqfRDEtHTJqJ96vfTQUG4ZvnLoOoLps6-CJsCSULDDW_sjmLHdIwJRNJTkPoNzoLDWibUA2IKAdBqwk_rOvalo5GTtZX73A69fHByeKyX8IKnPl94FbSJkuJNQNxdakFzV1KQZwzGsCZpoScPiru8X4kEWqKTd-TtGTJgNIh-LSOg5CtiaRfIB-RZYZtMpcS1RHlvDRUqqLxsAJVFTJvH1PmrUC2SROpDjhrJtxiBqw")' }}></div>
                <div className="text-center mt-auto">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900">$59</span>
                    <span className="text-slate-400 line-through ml-2 text-lg">$79</span>
                  </div>
                  <button className="w-full py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors uppercase tracking-widest text-sm">Select Option</button>
                </div>
              </div>

              {/* Option 2 (Best Value) */}
              <div onClick={() => setSelectedBundle(2)} className={`relative bg-white rounded-2xl p-8 border-2 ${selectedBundle === 2 ? 'border-gold shadow-premium' : 'border-gold/30'} flex flex-col transform md:scale-110 z-20 cursor-pointer`}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
                  <span className="bg-gold text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">Most Popular & Best Value</span>
                </div>
                <div className="flex justify-between items-start mb-2 mt-2">
                  <h3 className="text-2xl font-serif font-bold text-gold">Buy 2 Get 1 FREE</h3>
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-black uppercase">Save 33%</div>
                </div>
                <p className="text-xs text-slate-400 mb-6 uppercase tracking-widest italic">90 Day Supply (3 Jars)</p>
                <div className="relative aspect-square w-48 mx-auto mb-8 bg-cream rounded-full bg-cover bg-center flex items-center justify-center border border-gold/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyY2eh3ORRq3aMQECNKSDg6gL-YuXBI_7GWSl8XgMtPnh7xLi2UpOWelzspv_Oq23HOOeXmER1utwnlcjRyqa5mBVLqZW2Le0G-6RGNy_KLnOyqfW2lXKHS8HA_ay3nLkcAUgl64GlekwXmlWYWPpxnABBpHG7Tg4U8vNPBM6Hi9UmfBwwp2U8reXMyB4UEqcrW4GE-u61OdPtjgeqmq8Cy-4zFe3dZ-Ge_DWkSK_PRfbgAhuBi36srr0w-207hMGJVGLTr9EAv-o")' }}>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg">
                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                  </div>
                </div>
                <div className="text-center mt-auto">
                  <div className="mb-4">
                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Total Value: <span className="line-through">$237</span></p>
                    <span className="text-5xl font-bold text-slate-900">$118</span>
                    <p className="text-green-600 font-bold text-xs mt-2 italic">You save $119 instantly</p>
                  </div>
                  <div className="bg-cream/50 rounded-lg p-3 mb-6 flex items-center justify-center gap-2 border border-gold/10">
                    <span className="material-symbols-outlined text-gold">verified</span>
                    <span className="text-[11px] font-bold text-gold uppercase tracking-widest">Free Express Shipping</span>
                  </div>
                  <button className="w-full py-5 rounded-xl bg-primary text-white font-black hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 uppercase tracking-[0.1em]">Add To Cart</button>
                  <p className="text-[10px] text-slate-400 mt-4 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">security</span> Secure 256-bit encrypted checkout
                  </p>
                </div>
              </div>

              {/* Option 3 */}
              <div onClick={() => setSelectedBundle(3)} className={`bg-white rounded-2xl p-8 border ${selectedBundle === 3 ? 'border-primary ring-2 ring-primary/20' : 'border-gold/10'} shadow-sm flex flex-col transition-all hover:shadow-md cursor-pointer`}>
                <h3 className="text-xl font-bold mb-1 text-slate-800">Complete Glow</h3>
                <p className="text-xs text-slate-400 mb-6 uppercase tracking-widest">180 Day Supply (6 Jars)</p>
                <div className="aspect-square w-32 mx-auto bg-slate-50 rounded-full mb-8 bg-cover bg-center border border-slate-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoe4XCw_8JFL8dYIWvsFGKuendR8dujMqnxrui6d5EFtn9x_5m98OaCOADrCMHCt9HilTSdCdKLp1zxMTP1o7iv1ci1o4igDklkWKnbP0ui9H_K8Vf79DMll4nshV5GS6D3LrudHe_GbyBgS0vsEZ0un8rC4RE7wuz513ApzOnsmG2wnSUduAHVRr4U0SqmLDorlugCHUB7ja1sIOqWWCp-h88rVj2nzBoXqdhmX7JmplUmQtWCBPlDuF3WSKdP_EDFB9Vp1UeSkE")' }}></div>
                <div className="text-center mt-auto">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900">$198</span>
                    <span className="text-slate-400 line-through ml-2 text-lg">$474</span>
                  </div>
                  <button className="w-full py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors uppercase tracking-widest text-sm">Select Option</button>
                </div>
              </div>

            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12 grayscale opacity-60">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-gold">spa</span> <span className="text-xs font-bold uppercase tracking-widest">Vegan Formula</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-gold">science</span> <span className="text-xs font-bold uppercase tracking-widest">Clinically Tested</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-gold">verified_user</span> <span className="text-xs font-bold uppercase tracking-widest">30-Day Guarantee</span></div>
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif italic mb-2">Loved by Radiant Women</h2>
              <div className="flex justify-center text-gold mb-8">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/10">
                <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">Day 1</div>
                <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-p-zN3AOUwow68yBsbunz9_n77PHNpuYKKy3ORwQb1aZtDtCzwfvKJvlTTstzdCYqlAE0X3vrjFYFCJjSNtal_3I8fWH4eWDyZjTOID3-v3SGb6JTD85gvdiG4a_2qse5GSWnfUbbjpb0Tr0LBPM8DEkg2MaTH-0aHSReqZp9q51F2sDOc-lgRTsyXvyVyt4c46b8iFe26--Ub5dEqpUZw9GLvXJBGnJZAFoDBBSfF7ZWmy58ia6GYFSLV7Kw92WZxDEimfmGE78")' }}></div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">Day 30</div>
                <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiG5_Q5i1JYipNGn7xZFnJy1ET3CXG7KbyF8WyPR6XE6ZZVrCQIscECcnwZn2Riofot5xxIhqNPUpwT1EwA9ucAOl819qN-7qpY6lSQO7j3EGxP0xetG2vznUfc4lE4xFnjsb2oJGCtZeDWKcsLrii4fe_Lp7JbTpURirHmNmR2wccvHYNp7_IROOEUUuDdM6lnJI2qP57O_H-YG8uWiZFj0kTrSXnaECyu1gOlwZyrXxyfG6twIFfn_6oyZmqE91SYTAxUGA8qeE")' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 max-w-3xl mx-auto px-4" id="faq">
          <h2 className="text-3xl font-serif text-center mb-10">Common Questions</h2>
          <div className="flex flex-col gap-4">
            <details className="group bg-white rounded-xl border border-gold/10 overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-800 select-none">
                Why is the 3-Jar bundle recommended?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gold">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                Cellular turnover slows as we age. For women 45+, it takes roughly 45-60 days to see the full structural transformation of the dermis. The 3-jar bundle ensures you don't run out during the most critical phase of your skin's restoration, while offering the best value per jar.
              </div>
            </details>
            <details className="group bg-white rounded-xl border border-gold/10 overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-800 select-none">
                Is the Buy 2 Get 1 offer permanent?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gold">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                No, this is a limited-time promotional offer to welcome new customers to the Faccelove family. Once the countdown timer on this page expires, the offer may be removed without notice.
              </div>
            </details>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gold/10 p-4 z-50 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-lg bg-cream bg-cover bg-center hidden sm:block border border-gold/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyY2eh3ORRq3aMQECNKSDg6gL-YuXBI_7GWSl8XgMtPnh7xLi2UpOWelzspv_Oq23HOOeXmER1utwnlcjRyqa5mBVLqZW2Le0G-6RGNy_KLnOyqfW2lXKHS8HA_ay3nLkcAUgl64GlekwXmlWYWPpxnABBpHG7Tg4U8vNPBM6Hi9UmfBwwp2U8reXMyB4UEqcrW4GE-u61OdPtjgeqmq8Cy-4zFe3dZ-Ge_DWkSK_PRfbgAhuBi36srr0w-207hMGJVGLTr9EAv-o")' }}></div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gold font-black uppercase tracking-widest">Limited Bundle Offer</span>
              <span className="font-serif font-bold text-slate-900">Buy 2 Get 1 FREE + Free Shipping</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <span className="block text-xs text-slate-400 line-through">$237</span>
              <span className="block font-black text-2xl text-primary">$118</span>
            </div>
            <button onClick={scrollToPricing} className="bg-primary hover:bg-primary/90 text-white font-black py-3 px-10 rounded-xl shadow-lg shadow-primary/30 transition-all uppercase tracking-widest text-sm">
              Claim My Bundle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;