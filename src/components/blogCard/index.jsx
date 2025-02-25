import Link from 'next/link'
import './index.scss'

const BlogCard = ({ title, date, tag, img, link, alt }) => {
    return(
        <Link href={link} className="all_blogs__card">
            <figure>
                <img src={img} alt={alt} />
            </figure>
            <div className="all_blogs__card_details">
                <span className="all_blogs__card_tag">
                    {tag}
                </span>
                <span className="all_blogs__card_date">
                    {date}
                </span>
            </div>
            <h4 className='all_blogs__card_title'>
                {title}
            </h4>
        </Link>
    )
}

export default BlogCard;