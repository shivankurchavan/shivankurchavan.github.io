export default function AboutPage() {
  return (
    <div className="page">

      <header className="page-header">

        <p className="eyebrow">
          ABOUT
        </p>

        <h1>
          Sneak peek into my life
        </h1>

      </header>

      <div className="about-content">

        <p className="py-5">
        I like to eat food, a lot of it. "bakasur" is somewhat of proper term for my condition. I enjoy different flavours and by god's grace I also posess enough judgement quotient to judge food on different parameteres.
        </p>

        <p>
        My favorite genere would be where i get something handy and flavourful, sandwiches basically, but not limited to it.  
        </p>

        <video 
          autoPlay
          muted
          loop
          playsInline
          width="100%" 
          src="/videos/video4.mov" 
          className="profile-image"
        >
          Your browser does not support the video tag.
        </video>   


      </div>

    </div>
  );
}