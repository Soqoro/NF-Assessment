"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
    const companydata = [
        {
            Name: "ByteDance",
            Description: "Company 1 Description",
            rating: 4.4,
            image: "https://nodeflair.com/companies/91.png",
            jobTitle:
                "Test Development Engineer (Compliance) - Global Payments",
            time: "1 minute ago",
            location: "Singapore",
            Tag: "QA",
            Skills: ["QA", "Testing", "Automation"],
            id: 1,
        },
        {
            Name: "Dropify",
            Description: "Company 2 Description",
            rating: 3.5,
            image: "https://nodeflair.com/companies/18356.png",
            jobTitle: "Front End Software Engineer",
            time: "2 minutes ago",
            location: "Phillipines",
            Tag: "Frontend",
            Skills: ["React", "Javascript", "HTML", "CSS"],
            id: 2,
        },
        {
            Name: "Coupang",
            Description: "Company 3 Description",
            rating: 4.8,
            image: "https://nodeflair.com/companies/2806.png",
            jobTitle: "Sr. Manager, iOS engineering (Coupang Play)",
            time: "3 minutes ago",
            location: "China",
            Tag: "IOS",
            Skills: ["Swift", "Objective-C", "IOS"],
            id: 3,
        },
        {
            Name: "GovTech",
            Description: "Company 4 Description",
            rating: 4.2,
            image: "https://nodeflair.com/companies/167.png",
            jobTitle: "Senior Cybersecurity Policy Developer",
            time: "4 minutes ago",
            location: "Singapore",
            Tag: "Cybersecurity",
            Skills: ["Cybersecurity", "Policy", "Compliance"],
            id: 4,
        },
        {
            Name: "UBS",
            Description: "Company 5 Description",
            rating: 4.1,
            image: "https://nodeflair.com/companies/344.png",
            jobTitle: "Senior Software Engineer",
            time: "5 minutes ago",
            location: "Hong Kong",
            Tag: "Fullstack",
            Skills: ["Java", "Spring", "React", "Javascript", "HTML", "CSS"],
            id: 5,
        },
    ];
    const [currentCompany, setCurrentCompany] = useState(companydata[0].id);
    const [company, setCompany] = useState(companydata[0].Name);

    return (
        <main className="flex flex-row justify-center p-5 mx-48">
            <div className="w-2/5">
                {companydata.map((company) => (
                    <button
                        key={company.id}
                        className={`rounded-lg border bg-card text-card-foreground shadow-sm mb-2 p-3 w-full hover:scale-105 ${
                            currentCompany === company.id
                                ? "border-emerald-400 border-2"
                                : "border"
                        }`}
                        onClick={() => {
                            setCurrentCompany(company.id);
                            setCompany(company.Name);
                        }}
                    >
                        <div className="flex flex-row gap-2 items-start">
                            <Image
                                src={company.image}
                                alt="Company Logo"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col grow">
                                <div className="flex flex-row text-sm mb-1">
                                    {company.Name}
                                    <span className="flex flex-row items-center gap-1 ml-2">
                                        {company.rating}{" "}
                                        <Star className="fill-black h-3 w-3" />
                                    </span>
                                </div>
                                <div className="font-bold text-start">
                                    {company.jobTitle}
                                </div>
                                <div className="flex flex-row text-sm">
                                    <span className="text-green-400 font-bold mr-3">
                                        {company.time}
                                    </span>{" "}
                                    <span className=" text-gray-400 flex flex-row items-center">
                                        <MapPin className="fill-gray-200 h-4 w-4" />{" "}
                                        {company.location}
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-md border text-card-foreground p-2 text-sm text-emerald-500 font-bold bg-emerald-100 border-emerald-100">
                                {company.Tag}
                            </div>
                        </div>
                        <Separator className="my-3" />
                        <div className="flex items-start">
                            {company.Skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="rounded-md border text-card-foreground p-2 text-sm text-gray-500 font-bold bg-gray-100 border-gray-100 mr-2"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </button>
                ))}
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-2 p-2 ml-2 w-3/5 flex">
                <h1 className="font-bold">{company}</h1>
            </div>
        </main>
    );
}
