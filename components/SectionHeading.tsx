interface SectionHeadingProps {
  title: string;
  href?: string;
  linkText?: string;
}

export default function SectionHeading({
  title,
  href,
  linkText = "View all",
}: SectionHeadingProps) {
  return (
    <div className="section-heading">

      <h2>{title}</h2>

      {href && (
        <a href={href}>
          {linkText} →
        </a>
      )}

    </div>
  );
}