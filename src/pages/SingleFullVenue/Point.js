export default function Point({ pointDesc, point }) {

    // const icons = [
    //     {
    //         title: 'Entire Home',
    //         iconn: '<i className="fas fa-home"></i>'
    //     },
    //     {
    //         title: 'Sparkling clean',
    //         iconn: '<i class="fas fa-home"></i>'
    //     },
    //     {
    //         title: 'Great Location',
    //         iconn: '<i class="fas fa-home"></i>'
    //     },
    //     {
    //         title: 'Superhost',
    //         iconn: '<i class="fas fa-home"></i>'
    //     }
    // ]

    const descObj = pointDesc.find(desc => desc.pointTitle === point)
    // const iconss = icons.find(icon => icon.title === point)
    return (
        <div className='points-wrapper'>
            <div className='points'>
                <div><b>{point}</b></div>
                <div>&rarr; {descObj.text}</div>
            </div>
        </div>
    )
}
