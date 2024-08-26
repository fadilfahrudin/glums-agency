

type serviceType = {
    service_name: string,
    service_banner_path: string,
    id: number,
    excerpt: string,
    sub_excerpt: string,
    desc: string
}

interface Props {
    data: serviceType
}
const ServiceCard = ({ data }: Props) => {
    const type = data.sub_excerpt.split(',')
    return (
        <div className="serviceCard">
            <div className='CardContainer'>
                {type.map((item, index) => <Child type={item} key={index} title={data.service_name} img={data.service_banner_path} desc={data.desc} />)}
            </div>
        </div>
    )
}


const Child = ({ type, title, desc, img }: { type: string, title: string, desc: string, img: string }) => {
    return (
        <div className='card'>
            <div className="card__info">
                <div className="info__title">{title}</div>
                <div className="info__type">{type}</div>
                <p className="info__desc">
                    {desc}
                </p>
            </div>
            <div className="card__img">
                <img src={img} alt={title} width={400} height={400} />
            </div>
            <div className="scrolldown">
                Scroll Down
                <span className='ic-scroll'></span>
            </div>
        </div>
    )
}

export default ServiceCard