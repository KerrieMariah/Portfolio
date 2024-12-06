"use client";
import { addWorkInfo } from "@/redux/features/work/workSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function WorkCard({ data }) {
    const dispatch = useDispatch();

    return (
        <div
            className={`col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item ${data.filter}`}
        >
            <div className="single-portfolio position-relative over-hidden mb-24">
                <Image
                    height="0"
                    width="0"
                    sizes="100vw"
                    className=" w-100 h-100"
                    src={data.imgUrl}
                    alt="work"
                />
                <div
                    className="port-content text-center position-absolute transition5 z-index11"
                    onClick={() => dispatch(addWorkInfo(data))}
                    data-toggle="modal"
                    data-target="#workModal"
                >
                    <span className="theme-color d-inline-block">
                        <i className="far fa-external-link-alt" />
                    </span>
                </div>
                <div className="port-over-content position-absolute left-0 pl-40 pr-40 pb-30 pt-40 z-index11">
                    <span className="text-white f-600 mb-2 d-block text-uppercase">
                        {data.title}
                    </span>
                    <h3 className="text-white">{data.brief}</h3>
                </div>
            </div>
        </div>
    );
}
