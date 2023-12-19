import { ColorRing } from "react-loader-spinner"
import css from "./Loader.module.css"


export const Loader = () => {

    return (
        <div className={css.loader}>
            <ColorRing
                visible={true}
                height="150"
                width="150"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
            /></div>
    )
}

