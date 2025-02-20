import logo from "@/assets/Logo.svg";
import Image from "next/image";
import {InputField, InputIcon, InputRoot} from "@/components/Input";
import {BadgeCheck, Copy, Link, Medal, MousePointerClick} from "lucide-react";
import {IconButton} from "@/components/Icon-Button";

export default function InvitePage(){
    return <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">

        <div className="flex flex-col gap-10 w-full max-w-[550px]">
            <Image src={logo} alt="dev" width={108.5} height={30}/>

            <div className="space-y-2">
                <h1 className="text-xl font-semibold font-heading text-gray-100 leading-none">Inscrição confirmada!</h1>
                <p className="text-gray-300">Para entrar no evento, acesse o link enviado para o seu e-mail.</p>
            </div>

            <div className="space-y-6">
                <div className="space-y-3">
                    <h2 className="text-gray-300 text-xl font-heading font-semibold leading-none">Indique e ganhe</h2>
                    <p className="text-gray-300">Muito texto, muito texto mais um pouco de texto p ficar legal ai vou escrevendo...</p>
                </div>
            </div>

            <InputRoot>
                <InputIcon>
                    <Link className="size-5"/>
                </InputIcon>
                <InputField readOnly defaultValue="http://localhost:3000/invite/kdbw1231d13ikljndla023"/>

                <IconButton className="-mr-2">
                    <Copy className="size-5"/>
                </IconButton>
            </InputRoot>

            <div className="grid gap-3 md:grid-cols-3">
                <div className="bg-gray-700 border border-bg-600 px-4 py-7
                flex flex-col items-center justify-center gap-1 rounded-xl relative">
                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1042</span>
                    <span className="text-sm text-gray-300 leading-none text-center">Acesse o link</span>

                    <MousePointerClick className="size-5 text-purple absolute left-3 top-3"/>
                </div>
                <div className="bg-gray-700 border border-bg-600 px-4 py-7
                flex flex-col items-center justify-center gap-1 rounded-xl relative">
                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">23</span>
                    <span className="text-sm text-gray-300 leading-none text-center">Inscrições feitas</span>

                    <BadgeCheck className="size-5 text-purple absolute left-3 top-3"/>
                </div>
                <div className="bg-gray-700 border border-bg-600 px-4 py-7
                flex flex-col items-center justify-center gap-1 rounded-xl relative">
                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">10</span>
                    <span className="text-sm text-gray-300 leading-none text-center">Posição no rank</span>

                    <Medal className="size-5 text-purple absolute left-3 top-3"/>
                </div>
            </div>
        </div>

    </div>
}