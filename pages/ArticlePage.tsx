import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArticlePage: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display">
      {/* Sticky Notification */}
      <div className="bg-primary text-white text-center py-2 text-sm font-bold tracking-wide px-4">
        Hurry! 50% OFF Sale Ends Tonight at Midnight.
      </div>
      
      <Header variant="article" />

      <main className="flex-1 w-full flex justify-center py-8 px-4 sm:px-6">
        <div className="flex flex-col max-w-[800px] w-full gap-8">
          
          {/* Article Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Trending in Beauty</span>
              <span className="text-text-muted text-xs font-medium">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-text-main">
              The 5-Minute Routine Making Women Over 50 Look 10 Years Younger
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed font-medium">
              Why thousands of women are finally ditching their expensive 7-step serum routines for this one simple multi-balm stick.
            </p>
            
            {/* Author Meta */}
            <div className="flex items-center justify-between border-y border-[#f3e7ed] py-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7Sseul2JO7QZUnHZFPwdLtf8jTQk6JwQr2Nkw2jUjkQv_YuI7cmGrUPYuN-xy5A0dG-Yb9SzaWkJjAp2Ba1uS3AS7fTzTUra0x_urFnhmHJxir8x8u220ITWK3AKHWvvoVAIXRGr9G5GKdX0ZPJaE1J9O3Q3zpKWyuPMdOMY1WeYXz-Y0tU0HEXuYO0zIriZoYRtoE0oLud1LejNIGGAiTL60xZ-lBVr9qlSfotLRjdpmunFMlcgQUyhpY2_QiMvA4pvZIYpakp4')" }}></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-main">By Jessica Miller</span>
                  <span className="text-xs text-text-muted">Beauty Editor | Updated Oct 24, 2024</span>
                </div>
              </div>
              <div className="flex gap-2 text-text-muted">
                <span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-primary">share</span>
                <span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-primary">bookmark</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full relative group rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-[16/9] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTmTlSTo6EOXgzel_FMnvOFjEyBxiANZ6Oje7HLHRTtrV9FJg5riu_dWtQ8lP1qetVm1NNr8jCuQHYoYDbu4z-uiS6jvr20F_K91T904DdWKTnh6daJ1VWDWzqcIjNQa-4mD3zjx2UtCeZ6hwvBjNjZZFDIc4weMgWfjStIuvjFjsSWYfyGyks9_Fkj5078XcJUJ-fVNhxP6HFD2g8v0n5er13BsCL-3403HyYfC-T9g8fPEzE-QD2QDzBUMJxepJvUorH0_kvB9o')" }}>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded">
              Results may vary.
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 py-4 opacity-60 grayscale">
            <span className="text-lg font-serif italic font-bold">VOGUE</span>
            <span className="text-lg font-serif font-bold tracking-widest">BAZAAR</span>
            <span className="text-lg font-serif font-bold">ELLE</span>
            <span className="text-lg font-serif font-bold">Vanity Fair</span>
            <span className="text-lg font-sans font-black tracking-tight">allure</span>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none text-text-main/90 font-medium">
            <p className="mb-6 leading-loose text-lg">
              <span className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">I</span>t starts slowly. First, it's the fine lines around the eyes. Then, the dullness that no amount of coffee seems to fix. Before you know it, you're staring in the mirror at skin that feels dry, tired, and frankly, a bit neglected.
            </p>
            <p className="mb-8 leading-loose text-lg">
              If you're anything like me (I'm 54), you've probably spent a small fortune on serums, creams, and complex 10-step routines that promised the world but delivered... well, sticky pillows and disappointment.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8 text-text-main">The "Hidden" Problem with Traditional Anti-Aging</h3>
            <p className="mb-6 leading-loose text-lg">
              Most anti-aging products sit on the surface. They feel nice for an hour, but they don't penetrate deeply enough to provide lasting hydration or structural support for mature skin. Plus, who has 20 minutes every morning and night to layer five different products?
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-lg italic font-semibold text-text-main m-0">
                "I realized I didn't need more products. I needed smarter products. That's when my dermatologist whispered one word: Faccelove."
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8 text-text-main">Enter the "Miracle Stick"</h3>
            <p className="mb-6 leading-loose text-lg">
              Faccelove isn't just another moisturizer. It's a concentrated multi-balm designed specifically for post-menopausal skin structure. Infused with Salmon Complex and Collagen, it targets deep wrinkles and restores elasticity instantly.
            </p>

            {/* Inline Image Grid */}
            <div className="my-10">
              <h4 className="text-center font-bold text-xl mb-6">See Real Women's Results</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: "Sarah, 52", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD5W-HJLUoMO-FjIs6ojmGN31D2PoOBv4dSjszEjwswrh_DxEPhMpgrZUZNgbUAtnYX6HIvZJrEUeL8N8T6aHbXunea4YyrlOot4qe3tODakyvMdO2tINvypoEgAsHOgZq5ZEkC0JSyLDjZnrOGYTOfl9sIC3JT7cQA7Bvlis9VADKTf5xZrwoLFkxR9Nl1utIs95jcxE-eAZc73Et8Yi01escU4SK39igofRVrnJpBeMRWvMHQYZzRqWIKyjkQfaTtq6lcWvQ-IM" },
                  { name: "Texture", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1wgS9mw_G_3sFsS6HUCezEL7RT4I4Vjiw6F7HhtPDK9ozn7d6_TEVDGErAy4D9H4DdaqYfIP8XMfFcU808IKM78ON9Ismw1BmPanhBthrAAbAc28rbqdH-b0SjgE4roh0s9lcKZI6CH1H2IZf6i1eaitaytXb6V0isiXLwlv5p8kZBPt2tzu3dnJiNqhLxGcoYikJ-2ffyxEARkoGDeYsAeuuSVqXGaFfwFXffJSFW0SbXrfkfaXW3iB3K-xMUTcKsgyYuIjg8PU" },
                  { name: "Martha, 61", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8g2DM1q521m6tURKhHHrJqzleMK8hhXH6GhaSBiVsEMH8dImpsflHDbjwWydida2wi5iDNrE1ZzHMikj36V2LA-WKzTaMCM36J_0lTEp5KBjD3A94eYYgL4YFm32jU90T0_-I-4jHG5JRs5adzFBLMNamZJuN0Vqlh3bwkPn_r7-nG54yJlvONKq41fbRvwwVFZs6w-6ZPB_ytGYRH_oCyO_Lp1jOy0B_MH-JA09WwzIY9jLAEu7ooSKvxxgIxuqPBhb_O1RM-0Q" },
                  { name: "Routine", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGE4apHd0xqj_1JgfPJ1LmkeOcgvG2pd_6TEDXrCCC-9jbQE8EabLp5La3YxLUsez8263dxa59w6WZXY3K4nvUz-1K3myM0Cv-wTDQj_P5UGmRTYtzJwbrb6W4-EN5DeePd0Ipe351GURkoLXUgxlBxpsgQJq6plb-uOwuXOv_tnbYSZ3T9ylHnJEE0iN1JF0AKWyymdpzQgFcV5fVqpSpzFdL5bAT47807k0olHdW23NcwkwOipSQvD24In_V-RLlVCpSomSAK0o" }
                ].map((item, index) => (
                  <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[9/16]">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-500" style={{ backgroundImage: `url('${item.img}')` }}></div>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-4xl drop-shadow-lg">play_circle</span>
                    </div>
                    <div className="absolute bottom-2 left-2 text-white text-xs font-bold drop-shadow-md">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-text-main">Why It's Taking Over Hollywood</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span className="text-lg"><strong>Instant Glow:</strong> The moment you swipe it on, your skin looks dewy and hydrated, not greasy.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span className="text-lg"><strong>Portable Powerhouse:</strong> No spills in your purse. Touch up wrinkles in the car, at dinner, or on a plane.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span className="text-lg"><strong>Makeup Friendly:</strong> Can be used before or <em>after</em> makeup to fix cakey foundation lines.</span>
              </li>
            </ul>
          </article>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg border border-[#f3e7ed] overflow-hidden">
            <div className="bg-[#fcf8fa] p-4 text-center border-b border-[#f3e7ed]">
              <h3 className="text-xl font-bold">How Does It Compare?</h3>
            </div>
            <div className="grid grid-cols-3 text-sm md:text-base">
              <div className="p-4 font-bold text-text-muted flex items-center">Feature</div>
              <div className="p-4 font-bold text-text-muted text-center border-l border-[#f3e7ed]">Regular Cream</div>
              <div className="p-4 font-bold text-primary text-center bg-primary/5 border-l border-[#f3e7ed]">Faccelove</div>
              
              <div className="p-4 border-t border-[#f3e7ed] text-text-main font-medium">Deep Hydration</div>
              <div className="p-4 border-t border-l border-[#f3e7ed] text-center"><span className="material-symbols-outlined text-gray-400">check</span></div>
              <div className="p-4 border-t border-l border-[#f3e7ed] text-center bg-primary/5"><span className="material-symbols-outlined text-primary font-bold">check_circle</span></div>
              
              <div className="p-4 border-t border-[#f3e7ed] text-text-main font-medium">Portable Stick Format</div>
              <div className="p-4 border-t border-l border-[#f3e7ed] text-center"><span className="material-symbols-outlined text-red-400">close</span></div>
              <div className="p-4 border-t border-l border-[#f3e7ed] text-center bg-primary/5"><span className="material-symbols-outlined text-primary font-bold">check_circle</span></div>
              
              <div className="p-4 border-t border-[#f3e7ed] text-text-main font-medium">Use Over Makeup</div>
              <div className="p-4 border-t border-l border-[#f3e7ed] text-center"><span className="material-symbols-outlined text-red-400">close</span></div>
              <div className="p-4 border-t border-l border-[#f3e7ed] text-center bg-primary/5"><span className="material-symbols-outlined text-primary font-bold">check_circle</span></div>
            </div>
          </div>

          {/* Testimonial Highlight */}
          <div className="bg-text-main text-white rounded-xl p-8 md:p-10 relative overflow-hidden mt-6">
            <span className="material-symbols-outlined absolute top-4 left-4 text-white/10 text-9xl -z-0">format_quote</span>
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="flex text-yellow-400 gap-1">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
              </div>
              <p className="text-xl md:text-2xl font-serif leading-relaxed">
                "I was skeptical. But after 2 weeks, my husband asked if I did something to my face. My jawline looks tighter, and my neck lines are fading. I just bought 3 more for my sisters."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvi_BeMyXCtYG6cKv9CSK-vErzr1fAgpQAQ7w6Oiw4lDfmroBHUL1mopsULT7nnn6GEBw5r9rw4Rt_ZmzKSUPmJROxmlae0haVRNzcOcGTi6LsTcMJQSXgMRnYnT-O-C0y7-EpTGlHSLOXZE4lv48DZfX2OBY0Huiw2sB-lC-r-H40w_a8Eov65fSkmBsllTkOMXF6bb3unUATz9EHcLpMqbMcpjcJ1bqUinnylrXmro8xgMWzKqFLMAH5lK9fFkYjh7L1qSyDsHw')" }}></div>
                <div className="text-left">
                  <div className="font-bold">Rebecca T.</div>
                  <div className="text-sm text-white/70">Verified Buyer, 58</div>
                </div>
              </div>
            </div>
          </div>

          {/* Offer Section */}
          <div className="flex flex-col items-center gap-6 py-10">
            <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2 border border-red-100 animate-pulse">
              <span className="material-symbols-outlined text-lg">local_fire_department</span>
              High Demand: Only 14 bundles left at this price.
            </div>
            <h2 className="text-3xl font-black text-center">Exclusive Reader Offer</h2>
            <p className="text-center text-lg text-text-muted max-w-lg">
              Get the Faccelove Multi-Balm for <strong>50% OFF</strong> plus Free Shipping when you order today through this article.
            </p>

            {/* Product Card */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-primary/20 max-w-sm w-full">
              <div className="relative rounded-lg overflow-hidden aspect-square mb-6 bg-background-light">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1bTwgySVRCdHczRqFO5O2j8dAR2jzaAQiAtyRhtbOscWr5BR5ri6Q0N7ClY7w-cufobtgowcif0ohkYAKBAfEkR7RvZfiJvK_nEJQYl3KptMkRK2X61o3DqJ-J3BoPO0HYtijxkl7tvVUSNAni8WWq0wV5AeTT_2rFy7PPa05BXi5NiPVg0G0BL_HzVpfKRfcWoJcuguWaeT9liRdW_ry0Uye0L9a1hovdk-Y4D1KZY58BzqyroJI57U6oUL49z-PL9Qo_BRPeEM')" }}></div>
                <div className="absolute top-0 left-0 bg-primary text-white font-bold px-3 py-1 rounded-br-lg">
                  BEST SELLER
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Faccelove™ Multi-Balm</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-400 line-through decoration-red-500">$58.00</span>
                    <span className="text-2xl font-black text-primary">$29.00</span>
                  </div>
                </div>
                <Link to="/offer" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 transition transform active:scale-95 flex items-center justify-center gap-2">
                  <span>Get My 50% Off</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <div className="flex justify-center gap-4 text-xs text-text-muted font-medium">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">verified_user</span> 30-Day Guarantee</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">local_shipping</span> Free Shipping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t border-[#f3e7ed] pt-8 pb-24">
            <h3 className="text-xl font-bold mb-6">Recent Comments</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATBl7UjOCgw1E4jxFwKxo-uYbhvcihrDTHlVmHjlEt-U_PjJSQbdnfgTMIexQsO3OfcS896-kxvF2raTXU4kxWLPj5McgZX8zAmbyPJ__t9k22Ww9HtEWK1c5vSC3194kM2krGldGa7xqweVyAwRqcg9VMtOFLrcjHAQAxFAIYuJD4zZvx6EHor1ugEu4OoNRxaDRtXi88CYnzgvGSK3qctWZEJbiIG7xjJhU2dpvKwkD1U-f-b4n0fX3veDtX9ZE7hKV3KtQ8c8w')" }}></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-primary">Maria L.</span>
                    <span className="text-xs text-gray-400">2 hours ago</span>
                  </div>
                  <p className="text-sm text-text-muted">Just ordered mine! My sister swears by this stick.</p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-400 font-medium">
                    <span className="cursor-pointer hover:text-primary">Like</span>
                    <span className="cursor-pointer hover:text-primary">Reply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50">
        <div className="max-w-[960px] mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold text-text-main">Faccelove Multi-Balm</span>
            <span className="text-xs text-green-600 font-bold">In Stock - Ready to Ship</span>
          </div>
          <Link to="/offer" className="flex-1 sm:flex-none w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-primary/90 transition flex items-center justify-center gap-2">
            Check Availability
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;