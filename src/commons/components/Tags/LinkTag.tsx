import { Link } from "gatsby";

import Tag from './Tag';

type Props = {
    tag: string;
}

function LinkTag({tag}: Props) {
    return <Link to={`/?tag=${tag}`}><Tag tag={tag} /></Link>
}