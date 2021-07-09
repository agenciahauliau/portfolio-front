import React from 'react';
import { Link } from 'react-router-dom';
import BlogTopo from '../../Estruturas/Blog/BlogTopo';
import ReactPaginate from 'react-paginate';
import BlocoQuery from '../../Estruturas/Blog/BlocoQuery';

import './Blog.scss';


function Blog() {
	return (
		<div className="blog">
			<div className="populares">
				<BlogTopo />
			</div>
			<div className="conteudoBlog">
				<div className="container">
					<div className="artigos">
						<BlocoQuery />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
