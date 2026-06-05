"use client";
import{useState,useEffect,useRef,FormEvent}from"react";
const P="01009260259",PD="0100 926 0259",PI="+201009260259",WN="201009260259";
const WM="مرحباً، محتاج أعرف تفاصيل وأسعار هاسيندا راس الحكمة من بالم هيلز — Hacienda Ras El Hekma Palm Hills";
const WU=`https://wa.me/${WN}?text=${encodeURIComponent(WM)}`;
const WK="7955729f-84bd-426b-b872-18613fe46c8f";
const LE=new Date(Date.now()+9*864e5);
type UT="all"|"beach"|"chalet"|"twin"|"villa";
const UNITS=[
  {n:"بيتش هوم ١ غرفة",en:"1BR Beach Home",p:"11.7 مليون",t:"beach"as UT},{n:"بيتش هوم ٢ غرف",en:"2BR Beach Home",p:"15 مليون",t:"beach"as UT},
  {n:"بيتش هوم ٣ غرف",en:"3BR Beach Home",p:"18 مليون",t:"beach"as UT},{n:"شاليه جونيور",en:"Junior Chalet",p:"23 مليون",t:"chalet"as UT},
  {n:"شاليه سينيور",en:"Senior Chalet",p:"28 مليون",t:"chalet"as UT},{n:"توين هاوس",en:"Twin House",p:"44 مليون",t:"twin"as UT},
  {n:"فيلا الصف الرابع",en:"Villa 4th Row",p:"125 مليون",t:"villa"as UT},{n:"فيلا الصف الثالث",en:"Villa 3rd Row",p:"165 مليون",t:"villa"as UT},
  {n:"فيلا الصف الثاني",en:"Villa 2nd Row",p:"195 مليون",t:"villa"as UT},{n:"فيلا الصف الأول",en:"Villa 1st Row",p:"450 مليون",t:"villa"as UT},
];
const FAQS=[
  {q:"أين يقع هاسيندا راس الحكمة من بالم هيلز؟",a:"Hacienda Ras El Hekma عند الكيلو ٢٣٨ الساحل الشمالي — أضخم مشروع ساحلي من Palm Hills على البحر المتوسط."},
  {q:"ما أنواع الوحدات في هاسيندا بالم هيلز — Hacienda Palm Hills؟",a:"بيتش هومز وشاليهات وتوين هاوس وفيلات بإطلالات بحرية. هاسيندا بالم هيلز فيها تشكيلة كاملة بتشطيب فُل."},
  {q:"كم تبدأ أسعار بالم هيلز هاسيندا راس الحكمة — Palm Hills Hacienda؟",a:"من ١١.٧ مليون جنيه لبيتش هوم، وحتى ٤٥٠ مليون لفيلات الصف الأول. الأسعار استرشادية من بالم هيلز."},
  {q:"ما خطة سداد Hacienda Ras El Hekma من Palm Hills؟",a:"٥٪ مقدم + ٥٪ بعد فترة وتقسيط حتى ١٠ سنوات. فيلات الصفوف الأولى على ٨ سنوات."},
  {q:"ما مساحة مشروع هاسيندا راس الحكمة؟",a:"١٬٤٠٠ فدان مع ٤.٨ كم بيتش فرونت و٨٤٪ مساحات خضراء ومائية — أكبر مشروع ساحلي مسوّر في مصر من بالم هيلز."},
];
const Ph=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const Chv=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>;
function trk(id:string){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","cta_click",{cta_id:id});}

export default function Home(){
  const[ft,sFt]=useState<UT>("all");const[fq,sFq]=useState<number|null>(null);const[mn,sMn]=useState(false);
  const[fs,sFs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[pop,sPop]=useState(false);const[ps,sPs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[ck,sCk]=useState(false);const[prv,sPrv]=useState(false);
  const[cd,sCd]=useState({d:9,h:0,m:0,s:0});
  const psr=useRef(false);const fr=useRef<HTMLFormElement>(null);const pfr=useRef<HTMLFormElement>(null);

  useEffect(()=>{
    document.querySelectorAll(".fin").forEach(el=>{new IntersectionObserver(([e])=>{if(e.isIntersecting)e.target.classList.add("vis")},{threshold:.1}).observe(el)});
    try{if(!localStorage.getItem("ck2"))sCk(true)}catch{sCk(true)}
    const ci=setInterval(()=>{const d=LE.getTime()-Date.now();if(d<=0)return clearInterval(ci);sCd({d:Math.floor(d/864e5),h:Math.floor(d%864e5/36e5),m:Math.floor(d%36e5/6e4),s:Math.floor(d%6e4/1e3)})},1000);
    return()=>clearInterval(ci);
  },[]);
  useEffect(()=>{
    if(psr.current)return;
    const os=()=>{if(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)>=.5)go()};
    const t=setTimeout(()=>go(),16000);window.addEventListener("scroll",os,{passive:true});
    function go(){if(psr.current)return;psr.current=true;sPop(true);document.body.classList.add("p-on");window.removeEventListener("scroll",os);clearTimeout(t)}
    return()=>{window.removeEventListener("scroll",os);clearTimeout(t)};
  },[]);
  const fl=ft==="all"?UNITS:UNITS.filter(u=>u.t===ft);
  function cp(){sPop(false);document.body.classList.remove("p-on")}
  async function sub(r:React.RefObject<HTMLFormElement|null>,ss:(s:any)=>void){
    if(!r.current)return;ss("sending");const fd=new FormData(r.current);const pl:Record<string,string>={};fd.forEach((v,k)=>pl[k]=v.toString());
    try{const res=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(pl)});
    const d=await res.json();if(d.success){ss("sent");r.current.reset();trk("form_submit")}else throw 0}catch{ss("error")}
  }
  return(<>
    <header className="hd"><div className="hd-in">
      <a className="hd-logo" href="#"><img src="/images/palm-hills-logo-white.png" alt="Palm Hills بالم هيلز"/><div><div className="hd-logo-t">هاسيندا راس الحكمة</div><div className="hd-logo-s">Hacienda Ras El Hekma · Palm Hills</div></div></a>
      <nav className="hd-links">{[["#about","المشروع"],["#units","الوحدات"],["#payment","السداد"],["#gallery","الصور"],["#location","الموقع"],["#contact","احجز"]].map(([h,l])=><a key={h} href={h}>{l}</a>)}</nav>
      <div className="hd-ctas"><a className="hd-call" href={`tel:${PI}`} onClick={()=>trk("call_hd")}><Ph/><span>{PD}</span></a><a className="hd-reg" href="#contact">سجل اهتمامك</a>
      <button className="hd-mob" onClick={()=>sMn(!mn)}>☰</button></div>
    </div>{mn&&<div style={{background:"#0f1b32",padding:"10px 20px"}}>{[["#about","المشروع"],["#units","الوحدات"],["#contact","احجز"]].map(([h,l])=><a key={h} href={h} onClick={()=>sMn(false)} style={{display:"block",padding:"9px 0",color:"rgba(255,255,255,.65)",textDecoration:"none",fontSize:"13px",borderBottom:"1px solid rgba(255,255,255,.03)"}}>{l}</a>)}</div>}</header>

    <div className="timer-strip">⏰ لونش هاسيندا راس الحكمة — Hacienda Ras El Hekma من بالم هيلز ينتهي خلال <span className="t-boxes"><span className="t-box">{cd.d}<span className="t-lbl">يوم</span></span><span className="t-box">{cd.h}<span className="t-lbl">ساعة</span></span><span className="t-box">{cd.m}<span className="t-lbl">دقيقة</span></span><span className="t-box">{cd.s}<span className="t-lbl">ثانية</span></span></span></div>

    <section className="hero2" id="hero">
      <div className="hero2-txt">
        <span className="hero2-tag">Palm Hills Developments · بالم هيلز</span>
        <h1 className="hero2-h">هاسيندا <em>راس الحكمة</em></h1>
        <p className="hero2-p">Hacienda Ras El Hekma — أول مدينة ساحلية مسوّرة من بالم هيلز عند الكيلو ٢٣٨ بالساحل الشمالي. هاسيندا بالم هيلز — Hacienda Palm Hills على ١٬٤٠٠ فدان.</p>
        <p className="hero2-kw">Palm Hills Hacienda · هاسيندا بالم هيلز · Hacienda Palm Hills · بالم هيلز راس الحكمة</p>
        <div className="hero2-nums">
          <div className="hero2-num"><strong>١٬٤٠٠</strong><span>فدان</span></div>
          <div className="hero2-num"><strong>٤.٨ كم</strong><span>شاطئ</span></div>
          <div className="hero2-num"><strong>٥٪</strong><span>مقدم فقط</span></div>
        </div>
        <div className="hero2-btns">
          <a className="b-teal" href="#contact" onClick={()=>trk("cta_hero")}>احجز وحدتك</a>
          <a className="b-wa2" href={WU} target="_blank" rel="noopener" onClick={()=>trk("wa_hero")}>💬 واتساب</a>
          <a className="b-ghost" href="#units">استكشف الوحدات</a>
        </div>
      </div>
      <div className="hero2-img"><img src="/images/hacienda-hero.webp" alt="هاسيندا راس الحكمة بالم هيلز — Hacienda Ras El Hekma Palm Hills"/></div>
    </section>

    <section className="s2 ov" id="about"><div className="s2-in">
      <div className="fin" style={{textAlign:"center"}}><span className="s2-tag">Hacienda Ras El Hekma · هاسيندا بالم هيلز</span>
        <h2 className="s2-h" style={{textAlign:"center"}}>عن هاسيندا راس الحكمة — بالم هيلز</h2>
        <p className="s2-p c">هاسيندا راس الحكمة Hacienda Ras El Hekma من بالم هيلز Palm Hills — مجتمع ساحلي مسوّر متكامل على البحر المتوسط. هاسيندا بالم هيلز Hacienda Palm Hills أكبر مشروع ساحلي في مصر بتشطيبات كاملة وتكييفات.</p>
      </div>
      <div className="ov-cards fin">
        {[{i:"🏖",t:"١٬٤٠٠ فدان",d:"مساحة هاسيندا راس الحكمة الإجمالية"},{i:"🌊",t:"٤.٨ كم بيتش فرونت",d:"شاطئ مباشر من بالم هيلز — Palm Hills"},{i:"🌿",t:"٨٤٪ خضرة ومياه",d:"بحيرات وحدائق في هاسيندا بالم هيلز"},{i:"✨",t:"فُل فينِش + تكييفات",d:"تشطيب كامل لكل وحدات Hacienda"}].map((x,i)=>
          <div key={i} className="ov-c"><div className="ov-c-i">{x.i}</div><h3>{x.t}</h3><p>{x.d}</p></div>
        )}
      </div>
      <div className="ov-stats fin">
        {[{v:"1,400",u:"فدان"},{v:"4.8",u:"كم شاطئ"},{v:"84%",u:"خضرة"},{v:"238",u:"كيلو"}].map((s,i)=>
          <div key={i} className="ov-stat"><strong>{s.v}</strong><span>{s.u}</span></div>
        )}
      </div>
    </div></section>

    <div className="band"><h3>سجّل في هاسيندا راس الحكمة — Hacienda Ras El Hekma الآن</h3><p>اللونش ينتهي قريب — احجز مكانك في هاسيندا بالم هيلز Palm Hills Hacienda</p>
      <div className="band-btns"><a className="b-teal" href="#contact" onClick={()=>trk("cta_band")}>سجل اهتمامك</a><a className="b-wa2" href={WU} target="_blank" rel="noopener" onClick={()=>trk("wa_band")}>💬 واتساب</a><a className="b-ghost" href={`tel:${PI}`} onClick={()=>trk("call_band")} style={{borderColor:"rgba(255,255,255,.15)",color:"#fff"}}><Ph/> اتصل</a></div>
    </div>

    <section className="s2 units2" id="units"><div className="s2-in fin" style={{textAlign:"center"}}>
      <span className="s2-tag">وحدات هاسيندا بالم هيلز · Hacienda Palm Hills Units</span>
      <h2 className="s2-h" style={{textAlign:"center"}}>الوحدات المتاحة في هاسيندا راس الحكمة</h2>
      <p className="s2-p c">بيتش هومز وشاليهات وتوين هاوس وفيلات من بالم هيلز — Palm Hills Hacienda بإطلالات بحرية مباشرة</p>
      <div className="u2-tabs">{([["all","الكل"],["beach","بيتش هوم"],["chalet","شاليهات"],["twin","توين هاوس"],["villa","فيلات"]]as[UT,string][]).map(([k,l])=><button key={k} className={`u2-tab ${ft===k?"on":""}`} onClick={()=>sFt(k)}>{l}</button>)}</div>
      <div className="u2-grid">{fl.map((u,i)=><div key={i} className="u2-card"><div className="u2-card-b"><h3>{u.n}</h3><span className="u2-en">{u.en}</span><span className="u2-from">يبدأ من</span><div className="u2-price">{u.p}</div><span className="u2-fin">تشطيب كامل + تكييفات</span><a href={WU} target="_blank" rel="noopener" className="u2-btn" onClick={()=>trk(`wa_${u.t}`)}>استفسر</a></div></div>)}</div>
      <p style={{textAlign:"center",fontSize:10,color:"var(--color-slate)",marginTop:18}}>أسعار هاسيندا راس الحكمة من بالم هيلز — Palm Hills Hacienda استرشادية وقابلة للتغيير</p>
    </div></section>

    <section className="s2 pay2" id="payment"><div className="s2-in fin" style={{textAlign:"center"}}>
      <h2 className="s2-h" style={{textAlign:"center"}}>سداد هاسيندا بالم هيلز — Palm Hills Hacienda Payment</h2>
      <div className="pay2-grid" style={{textAlign:"right"}}>
        <div className="pay2-c"><h3>نظام التقسيط</h3><ul className="pay2-list"><li>٥٪ مقدم</li><li>٥٪ بعد فترة</li><li>تقسيط حتى ١٠ سنوات</li><li>الصفوف الأولى ٨ سنوات</li><li>أجانب = مصريين</li></ul>
          <div style={{marginTop:14}}><a className="b-teal" href={WU} target="_blank" rel="noopener" style={{width:"100%",justifyContent:"center"}} onClick={()=>trk("wa_pay")}>اطلب التفاصيل</a></div></div>
        <div className="pay2-c"><h3>جدية الحجز EOI</h3>{[["بيتش هوم","250K"],["شاليهات","500K"],["فيلات + توين","1M"]].map(([t,v],i)=><div key={i} className="eoi2-r"><span className="eoi2-t">{t}</span><span className="eoi2-v">{v}</span></div>)}
          <p style={{fontSize:10,color:"var(--color-slate)",marginTop:12}}>مبالغ مستردة — هاسيندا راس الحكمة بالم هيلز</p></div>
      </div>
    </div></section>

    <section className="s2 gal2" id="gallery"><div className="s2-in fin" style={{textAlign:"center"}}>
      <h2 className="s2-h" style={{textAlign:"center"}}>صور هاسيندا راس الحكمة — Hacienda Ras El Hekma Gallery</h2>
      <div className="gal2-grid">
        <div className="gal2-it g-big"><img src="/images/hacienda-hero.webp" alt="هاسيندا راس الحكمة بالم هيلز"/><div className="gal2-cap">هاسيندا راس الحكمة — الإطلالة الرئيسية</div></div>
        <div className="gal2-it"><img src="/images/hacienda-master-plan.webp" alt="ماستر بلان هاسيندا بالم هيلز"/><div className="gal2-cap">Palm Hills Hacienda — ماستر بلان</div></div>
        <div className="gal2-it"><img src="/images/hacienda-beach.webp" alt="شاطئ Hacienda Ras El Hekma"/><div className="gal2-cap">شاطئ راس الحكمة — Hacienda Beach</div></div>
      </div>
    </div></section>

    <section className="am" id="facilities"><div className="am-in fin" style={{textAlign:"center"}}>
      <h3 className="s2-h" style={{color:"#fff",textAlign:"center"}}>مرافق هاسيندا راس الحكمة — Palm Hills Hacienda Amenities</h3>
      <div className="am-grid">{[{i:"🏋️",n:"نادي رياضي"},{i:"💎",n:"بحيرات"},{i:"🏠",n:"كلوب هاوس"},{i:"🔒",n:"مسوّر"},{i:"🏖",n:"بيتش فرونت"},{i:"💧",n:"مسطحات مائية"},{i:"🌳",n:"خضرة واسعة"},{i:"✨",n:"تشطيبات فاخرة"},{i:"✈️",n:"مطار قريب"},{i:"⛵",n:"مارينا"},{i:"🏢",n:"منطقة حرة"},{i:"📡",n:"مدينة ذكية"}].map((x,i)=>
        <div key={i} className="am-c"><div className="am-c-i">{x.i}</div><div className="am-c-n">{x.n}</div></div>
      )}</div>
    </div></section>

    <section className="s2 loc2" id="location"><div className="s2-in fin" style={{textAlign:"center"}}>
      <h2 className="s2-h" style={{textAlign:"center"}}>موقع هاسيندا راس الحكمة — Hacienda Location</h2>
      <div className="loc2-grid" style={{textAlign:"right"}}>
        <div className="loc2-img"><img src="/images/hacienda-master-plan.webp" alt="موقع هاسيندا راس الحكمة بالم هيلز"/></div>
        <div className="loc2-facts">{[{t:"كيلو ٢٣٨",d:"الطريق الساحلي الدولي"},{t:"راس الحكمة",d:"أجمل شواطئ المتوسط"},{t:"بالم هيلز",d:"Palm Hills — مطور منذ ١٩٩٧"}].map((x,i)=><div key={i} className="loc2-f"><h4>{x.t}</h4><p>{x.d}</p></div>)}</div>
      </div>
    </div></section>

    <section className="s2 faq2"><div className="s2-in fin" style={{textAlign:"center"}}>
      <h2 className="s2-h" style={{textAlign:"center"}}>أسئلة عن هاسيندا راس الحكمة — Hacienda FAQ</h2>
      <div className="faq2-list">{FAQS.map((x,i)=><div key={i} className="faq2-i"><button className={`faq2-q ${fq===i?"op":""}`} onClick={()=>sFq(fq===i?null:i)}><span>{x.q}</span><span className="ar2"><Chv/></span></button><div className={`faq2-a ${fq===i?"op":""}`}><p>{x.a}</p></div></div>)}</div>
    </div></section>

    <div className="disc"><div className="disc-in">
      <p>هذا الموقع يقدم معلومات استشارية عن مشروع هاسيندا راس الحكمة — Hacienda Ras El Hekma من بالم هيلز للتطوير العقاري — Palm Hills Developments. جميع الأسعار المذكورة استرشادية وقابلة للتغيير من المطور دون إشعار مسبق. الأسعار النهائية والتعاقد تتم مع بالم هيلز مباشرة.</p>
      <p>تواصل: <a href={`tel:${PI}`} style={{color:"var(--color-teal)",fontWeight:700}}>{PD}</a></p>
    </div></div>

    <section className="ct2" id="contact"><div className="s2-in fin" style={{textAlign:"center"}}>
      <h2 className="s2-h">سجل في هاسيندا راس الحكمة — Hacienda Ras El Hekma</h2>
      <p style={{color:"rgba(255,255,255,.5)",fontSize:13,maxWidth:520,margin:"0 auto"}}>املأ البيانات وفريق بالم هيلز — Palm Hills هيتواصل معاك لآخر الأسعار</p>
      <form className="ct2-form" ref={fr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(fr,sFs)}} style={{textAlign:"right"}}>
        <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Lead — هاسيندا راس الحكمة Hacienda Ras El Hekma بالم هيلز"/><input type="hidden" name="from_name" value="Hacienda Landing"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
        <div className="cf-row"><div className="cf-f"><label>الاسم *</label><input name="name" placeholder="اسمك" required/></div><div className="cf-f"><label>الموبايل *</label><input name="phone" type="tel" dir="ltr" placeholder="01012345678" required/></div></div>
        <div className="cf-row"><div className="cf-f"><label>الإيميل</label><input name="email" type="email" dir="ltr" placeholder="email@example.com"/></div><div className="cf-f"><label>نوع الوحدة</label><select name="unit_type"><option value="غير محدد">اختر</option><option value="بيتش هوم">بيتش هوم</option><option value="شاليه">شاليه</option><option value="توين هاوس">توين هاوس</option><option value="فيلا">فيلا</option></select></div></div>
        {fs==="sent"?<div style={{textAlign:"center",padding:"16px 0"}}><div style={{fontSize:36}}>✓</div><p style={{color:"var(--color-teal-light)",fontWeight:700,marginTop:4}}>تم استلام بياناتك</p></div>
        :<button type="submit" className="cf-sub" disabled={fs==="sending"}>{fs==="sending"?"جاري...":"إرسال"}</button>}
        {fs==="error"&&<p style={{color:"#ef4444",fontSize:11,textAlign:"center",marginTop:6}}>خطأ — <a href={WU} target="_blank" style={{color:"var(--color-teal-light)"}}>واتساب</a></p>}
      </form>
      <p style={{fontSize:9,color:"rgba(255,255,255,.25)",marginTop:10,maxWidth:440,margin:"10px auto 0"}}>بإرسال النموذج توافق على <button onClick={()=>sPrv(true)} style={{background:"none",border:"none",color:"var(--color-teal-light)",textDecoration:"underline",cursor:"pointer",fontSize:9,fontFamily:"var(--font-body)"}}>سياسة الخصوصية</button></p>
    </div></section>

    <footer className="ft2"><div className="ft2-in">
      <img src="/images/palm-hills-logo-white.png" alt="بالم هيلز Palm Hills"/>
      <p className="ft2-t">هاسيندا راس الحكمة — Hacienda Ras El Hekma من بالم هيلز Palm Hills. الكيلو ٢٣٨ الساحل الشمالي. هاسيندا بالم هيلز — Palm Hills Hacienda. أسعار استرشادية.</p>
      <div className="ft2-links"><a className="ft2-link" href={`tel:${PI}`} onClick={()=>trk("call_ft")}><Ph/>{PD}</a><a className="ft2-link" href={WU} target="_blank" rel="noopener" onClick={()=>trk("wa_ft")}>💬 واتساب</a></div>
      <div className="ft2-legal"><button onClick={()=>sPrv(true)}>سياسة الخصوصية</button><a href="#about">عن المشروع</a><a href="#contact">تواصل</a></div>
      <p className="ft2-cr">© 2026 · أسعار استرشادية · Palm Hills Hacienda Ras El Hekma · هاسيندا بالم هيلز</p>
    </div></footer>

    <div className={`p-bk ${pop?"on":""}`} onClick={cp}/>
    <div className={`p-dlg ${pop?"on":""}`}><button className="p-cls" onClick={cp}>✕</button>
      <span className="p-tag">⚡ هاسيندا راس الحكمة — Hacienda Ras El Hekma</span>
      <h2 className="p-ttl">احجز في هاسيندا راس الحكمة من بالم هيلز</h2>
      <p className="p-desc">سجّل دلوقتي في Hacienda Palm Hills واحصل على أولوية اختيار الموقع على الماستر بلان من بالم هيلز — Palm Hills</p>
      <ul className="p-perks"><li>أولوية اختيار الموقع في هاسيندا بالم هيلز</li><li>٥٪ مقدم — تبدأ من ٥٨٥ ألف</li><li>رد سريع من فريق Palm Hills</li></ul>
      {ps==="sent"?<div style={{textAlign:"center",padding:"12px 0"}}><div style={{fontSize:36}}>✓</div><p style={{color:"var(--color-teal-light)",fontWeight:700}}>تم</p></div>
      :<form className="p-form" ref={pfr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(pfr,sPs).then(()=>setTimeout(cp,2500))}}>
        <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Popup — هاسيندا راس الحكمة Hacienda بالم هيلز"/><input type="hidden" name="from_name" value="Hacienda Popup"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
        <div className="cf-f"><label>الاسم *</label><input name="name" placeholder="الاسم" required/></div>
        <div className="cf-f"><label>الموبايل *</label><input name="phone" type="tel" dir="ltr" placeholder="01012345678" required/></div>
        <button type="submit" className="p-sub" disabled={ps==="sending"}>{ps==="sending"?"جاري...":"احجز في هاسيندا راس الحكمة"}</button>
        <a className="p-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trk("wa_pop")}>💬 واتساب هاسيندا بالم هيلز</a>
      </form>}
    </div>

    {prv&&<><div style={{position:"fixed",inset:0,zIndex:300,background:"rgba(0,0,0,.55)"}} onClick={()=>sPrv(false)}/>
    <div style={{position:"fixed",zIndex:301,top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"min(520px,92vw)",maxHeight:"85vh",overflowY:"auto",background:"#fff",borderRadius:16,padding:"28px 24px",color:"var(--color-dark)"}}>
      <button onClick={()=>sPrv(false)} style={{position:"absolute",top:10,left:10,background:"#f0f0f0",border:"none",borderRadius:"50%",width:28,height:28,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
      <h2 style={{fontFamily:"var(--font-head)",fontSize:22,fontWeight:700,marginBottom:12}}>سياسة الخصوصية</h2>
      <div style={{fontSize:12,lineHeight:1.8,color:"var(--color-slate)"}}>
        <p style={{marginBottom:10}}>نجمع الاسم والهاتف والإيميل فقط عند تعبئة النموذج — للتواصل بخصوص هاسيندا راس الحكمة من بالم هيلز.</p>
        <p style={{marginBottom:10}}>بياناتك مشفرة عبر HTTPS ومحمية عبر Web3Forms. لا نبيع أو نشارك بياناتك مع أطراف ثالثة.</p>
        <p style={{marginBottom:10}}>يحق لك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها في أي وقت.</p>
        <p>تواصل: <a href={`tel:${PI}`} style={{color:"var(--color-teal)"}}>{PD}</a></p>
      </div>
      <p style={{fontSize:9,color:"#999",marginTop:12}}>آخر تحديث: يونيو 2026</p>
    </div></>}

    {ck&&<div className="ck2"><p>نستخدم cookies لتحسين تجربتك. <button onClick={()=>sPrv(true)} style={{background:"none",border:"none",color:"var(--color-teal-light)",textDecoration:"underline",cursor:"pointer",fontSize:9,fontFamily:"var(--font-body)"}}>سياسة الخصوصية</button></p>
      <div className="ck2-btns"><button className="ck2-ok" onClick={()=>{sCk(false);try{localStorage.setItem("ck2","1")}catch{}}}>موافق</button><button className="ck2-no" onClick={()=>sCk(false)}>رفض</button></div>
    </div>}

    <nav className="mb2"><div className="mb2-in"><a className="mb-call" href={`tel:${PI}`} onClick={()=>trk("call_mb")}><Ph/>{PD}</a><a className="mb-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trk("wa_mb")}>💬</a><a className="mb-book" href="#contact">سجل</a></div></nav>
  </>);
}
