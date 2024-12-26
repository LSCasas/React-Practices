import clsx from "clsx";

export default function Video({ image, title, channel }) {
    return (
        <article className={clsx('flex flex-col gap-2', {
            'border-2 border-red-500': channel === 'Marques Brownlee',
        })}>
            <img src={image} alt="" className="rounded-lg aspect-w-16 aspect-h-9" />
            <footer className="grid gap-2 grid-cols-12">
                <div className="col-span-2">
                    <img
                        src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${channel}`}
                        alt=""
                        className="rounded-full"
                    />
                </div>

                <p className="col-span-10 text-sm video-card-title">{title}</p>
                <p className="col-span-10 text-sm video-card-channel">{channel}</p>
            </footer>
        </article>
    );
}


//if (!channel) {
  //  return (
    //    <article>
      //      <p>incompleto</p>
        //</article>
    //)
//}
//const articleClassnames = ('video-card' + channel =='Marquest Brownlee' ? ' special' 
//: "")


//   let articleClassnames = ['video-card']
//if (channel == 'Marques Brownlee') {
//  articleClassnames.push('special')
//}