import { Link, Spacer } from "@nextui-org/react";

export default function Home() {
    return (
        <div className="flex justify-between container px-24">
            <div>
            </div>
            <div>
                <img src="" />
            </div>
            <div className="font-normal ">
                <Spacer y={6} />
                <div>
                    <Link className="text-2xl" href="#" color="foreground">Gromming</Link>
                </div>
                <Spacer y={6} />
                <div>
                    <Link className="text-2xl" href="#" color="foreground">Pet Sitting</Link>
                </div>
                <Spacer y={6} />
                <div>
                    <Link className="text-2xl" href="#" color="foreground">Pet Care Sope</Link>
                </div>
                <Spacer y={6} />
                <div>
                    <Link className="text-2xl" href="#" color="foreground">Pet Sitting</Link>
                </div>
                <Spacer y={6} />
                <div>
                    <Link className="text-2xl" href="#" color="foreground">Pet Sitting</Link>
                </div>
                <Spacer y={6} />
                <div>
                    <Link className="text-2xl" href="#" color="foreground">Pet Sitting</Link>
                </div>

            </div>
        </div>
    );
}
