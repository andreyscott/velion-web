import { Weblayout } from "../../components/common/weblayout";
import { Contacthero } from "../../containers/contact/herocontact";
import { Reachout } from "../../containers/contact/sendmessage";

export const Contactus = ()=> {

    return (
        <Weblayout>
            <Contacthero/>
            <Reachout/>
        </Weblayout>
    )
}