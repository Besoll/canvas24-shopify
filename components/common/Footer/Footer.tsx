import s from "./Footer.module.css"

const Footer = () => {

    return (
        <footer className={s.footer}>
           <div className="container mx-auto px-6">
            <div className="mt-5 flex flex-col items-center">
                <div className="py-6">
                    <p className="mb-6 text-sm text-primary-2 font-bold">
                        Copyright 2020-{new Date().getFullYear()} by Canvas24.ro. All Rights Reserved.
                    </p>
                </div>
            </div>
           </div>
        </footer>
    )
}

export default Footer