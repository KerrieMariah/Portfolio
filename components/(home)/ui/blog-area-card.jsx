"use client";
import { addBlogInfo } from "@/redux/features/blog/blogSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function BlogAreaCard({ data }) {
    const dispatch = useDispatch();

    // blog info handler
    const blogInfoHandler = (e) => {
        e.preventDefault();
        dispatch(addBlogInfo(data));
    };

    return (
        <div className="single-blog mb-50 shadow-hover transition3">
            <div className="blog-img">
                <Image
                    height="0"
                    width="0"
                    sizes="100vw"
                    className="img-grayscale w-100 transition5 img h-100"
                    src={data.imgUrl}
                    alt="blog image 1"
                />
            </div>
            <div className="single-blog-content bg-white pl-30 pt-25 pb-15 pr-30">
                <ul className="blog-meta">
                    <li className="mr-15 d-inline-block">
                        <span className="theme-color d-inline-block mr-1">
                            <i className="fas fa-folder" />
                        </span>
                        <span className="secondary-color2 d-inline-block">
                            {data.category}
                        </span>
                    </li>
                    <li className="mr-15 d-inline-block">
                        <span className="theme-color d-inline-block mr-1">
                            <i className="fas fa-user" />
                        </span>
                        <Link
                            className="secondary-color2 d-inline-block"
                            href="/"
                        >
                            Kerrie Mariah
                        </Link>
                    </li>
                    <li className="d-inline-block">
                        <span className="theme-color d-inline-block mr-1">
                            <i className="fas fa-comment" />
                        </span>
                        <span className="secondary-color2 d-inline-block">
                        
                        </span>
                    </li>
                </ul>

                <h3 className="mb-10 mt-1">
                    <Link
                        className="primary-hover"
                        data-toggle="modal"
                        data-target="#exampleModal-b1"
                        href={data.link}
                        onClick={blogInfoHandler}
                    >
                        {data.title}
                    </Link>
                </h3>
            </div>
        </div>
    );
}
