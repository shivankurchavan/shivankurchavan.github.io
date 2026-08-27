export default function AboutPage() {
  return (
    <div className="page">

      <header className="page-header">

        <p className="eyebrow">
          ABOUT
        </p>

        <h1>
          A little more context.
        </h1>

      </header>

      <div className="about-content">

        <p>
          hi, I'm Shivankur, i love to eat.
        </p>

        
        <video 
          autoPlay
          muted
          loop
          playsInline
          width="100%" 
          src="/videos/video1.mp4" 
          className="video"
        >
          Your browser does not support the video tag.
        </video>   


      </div>

    </div>
  );
}