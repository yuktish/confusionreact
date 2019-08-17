import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(comments){
        if (comments!= null){
        const comment = comments.comments.map((dish) => {
            return (
              <li className="list-unstyled">
                <p>{dish.comment}</p>
                <p>--{dish.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(dish.date)))}</p>
              </li>
            );
          });
            return (
                 <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                 </div>
                );
            }
        else
            return(
                <div></div>
            );
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
                {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
                {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
        

    }
}
export default DishDetail;