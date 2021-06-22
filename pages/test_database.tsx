import Layout from '../components/layout';
import { AddNewUserForm } from '../components/AddNewUserForm';

export default function testDatabase() {
    return (
        <Layout title="Test Database">
            <AddNewUserForm/>
        </Layout>
    );
}