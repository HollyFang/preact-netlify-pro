import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1>电子雷管检测赋码系统</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/illustrations">使用说明</Link>
			<Link activeClassName={style.active} href="/contact">联系我</Link>
		</nav>
	</header>
);

export default Header;
