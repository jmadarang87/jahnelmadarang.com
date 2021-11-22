import { DataStore } from '@aws-amplify/datastore';
import { Contact } from './models';

function contact () {
    const submitMessage = async () => {
        const name = visitorName.value;
        const email = visitorEmail.value;
        const message =visitorMessage.value;
    }

    await DataStore.save(
        new Contact({
            "name": visitorName.value,
            "email": visitorEmail.value,
            "message": visitorMessage.value,
        })
    );
}