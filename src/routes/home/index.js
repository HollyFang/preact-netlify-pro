import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
					<p>上海复控华龙微系统技术有限公司是上海复旦微电子集团股份有限公司旗下专注于北斗卫星导航事业的子公司，是国内首家发布北斗导航基带处理芯片的企业。复控华龙聚焦于北斗产业链中基带芯片和模组的产品研发，为产业链中的整机企业提供快速应用方案，并着力开发面向行业的整体解决方案。
					</p>
					<p>复控华龙的技术根基源于1995年创立的上海华龙信息技术开发中心，秉承了20年的超大规模集成电路设计和嵌入式系统开发经验并发扬光大，先后发布了“领航”系列RDSS、RNSS、RDSS/RNSS多模多频等北斗基带处理芯片，并在行业解决方案、移动互联网、云服务和物联网等方面有着丰富积累。</p>
					<p>上海复控华龙微系统技术有限公司专业从事北斗导航领域产品开发与推广，聚焦北斗产业链中基带射频核心芯片和模组开发十余年，先后发布JFM系列北斗多模多频芯片和FHM系列北斗RDSS/RNSS模块，为产业链中的整机企业提供快速应用方案。同时公司坚持产、学、研、用深度结合，专注于高可靠市场好行业应用市场，为海洋气象、车载船载、基础建设、公共安全等行业领域提供解决方案。</p>
					<p>公司通过GJB9001认证、二级保密资质认证，并具有集成电路企业及博士后工作站资质。</p>
					</div>
					<div class={style.author}>- 上海复控华龙微系统技术有限公司</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
				你好，欢迎光临~ 这里记录着电子雷管检测赋码系统的相关说明，目前为测试版本。
				</p>
				<p class={style.bioright}>
				电子雷管检测赋码系统支持<strong>正常赋码</strong> 和 <strong>手动补码</strong> 两种生产模式
				</p>
			</div>
		</div>
	);
};

export default Home;
