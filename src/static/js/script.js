import { DataStore } from '@aws-amplify/datastore';
import { Contact } from '../../models';

const submit = (e) => {
    e.preventDefault();
    console.log('submitted!');
    let visitorName = document.getElementById('visitorName');
    let visitorEmail = document.getElementById('visitorEmail');
    let visitorMessage = document.getElementById('visitorMessage');

    DataStore.save(
        new Contact({
            "name": visitorName.value,
            "email": visitorEmail.value,
            "message": visitorMessage.value,
        })
    );
}

export default submit;
