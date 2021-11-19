import { ReactElement } from 'react';
import { Link } from 'remix';

interface CardProps {
  className?: string;
  slug: string;
  category: string;
  title: string;
  description?: string;
}

function Card({
  className,
  slug,
  category,
  title,
  description,
}: CardProps): ReactElement {
  return (
    <article className={`flex flex-col border ${className}`.trim()}>
      <Link
        className="no-underline flex-grow"
        to={`/${category}/${slug}`}
        prefetch="intent"
      >
        <section className="p-8 flex flex-col h-full">
          <div className="capitalize text-xs font-light mb-5">{category}</div>
          <h2 className="text-xl flex-grow break-words">{title}</h2>
          {!description ? null : (
            <p className="text-xs pt-10 line-clamp-2">{description}</p>
          )}
        </section>
      </Link>
    </article>
  );
}

export default Card;
