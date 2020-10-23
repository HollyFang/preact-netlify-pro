import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';

const illustrations = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<div class={style.pageIllustrations}>
			<h1 class={style.pageTitle}>使用说明书</h1>
			{ getIllustrationsListing(data, isLoading) }
		</div>
	);
};

function getIllustrationsListing(data, isLoading) {
	if (isLoading) {
		return (
			<article class={style.loadingPlaceholder}>
				<h2 class={`${style.illustrationtitle} loading`}>&nbsp;</h2>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
			</article>
		);
	}
	if (data && data.data) {
		const { data: illustrations } = data;
		return (
			<>
				{illustrations.edges.map(illustration => (
				<Link href={`/illustration/${illustration.id}`}>
					<article>
						<h2>{illustration.details.title}</h2>
						<div>
							{
								(illustration.details.tags.substr(1, illustration.details.tags.length - 2).split(',') || []).map(tag => <span class={style.tag}>{tag}</span>)
							}
						</div>
						<p class={style.preview}>
							{illustration.preview}
						</p>
					</article>
				</Link>
			))}
			</>
		);
	}
}

export default illustrations;
