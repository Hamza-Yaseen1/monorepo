import { spec } from '@/lib/swagger';
import ReactSwagger from './ReactSwagger';

export default async function IndexPage() {
    return (
        <section className="container py-10">
            <ReactSwagger spec={spec} />
        </section>
    );
}
