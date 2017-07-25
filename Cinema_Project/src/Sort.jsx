import React from 'react';
import CinemaStore from './store/CinemaStore';
import Checkbox from './Checkbox';


export default class Sort extends React.Component{
	constructor(props){
		super(props);
		this.handleMovieSearchChange = this.handleMovieSearchChange.bind(this);
		this.handleMovieSort = this.handleMovieSort.bind(this);
        
        this.state = {
            genres: [],
            genre_objects: [],
            genre_array: [],

            classifications: [],

            classification_array: []
        };

	}
	
	componentWillMount() {
        //this.generateCheckboxes();
		//console.log("Genres prop passing checking");
		//console.log(this.props.genresArray);
        //this.generateClassificationCheckbox();

    }
	
	handleMovieSearchChange(){
		this.props.onUserSearchInput(this.filterTextInput.value);

	}
	
	handleMovieSort(e){
		this.props.onSortSelection(e.target.value);
	}
   
	generateCheckboxes() {
		let arrayOfRequiredGenres = [];
		let genreName = [];
        let arrayOfGenres = Array.from(CinemaStore.getArrayOfGenres()); /*Save the Genre List*/
        this.setState({ genres: arrayOfGenres}); /*Cannot be used here, as it is not saved fast enough*/

		for(let i = 0; i < arrayOfGenres.length; i++){
            arrayOfRequiredGenres.push(
                <Checkbox passedValue={arrayOfGenres[i]} key={arrayOfGenres[i]} handleCheckboxChange={this.onToggleGenre.bind(this)} currentCheckboxStatus={this.findGenresCheckStatusFromArray(arrayOfGenres[i])}/>
            );
        }

        this.setState({ genre_objects: arrayOfRequiredGenres });
    }
	
	
/*------------------------------------*/


    generateClassificationCheckbox(){
        let testArray = this.props.classificationArray;
		//console.log("AMAZING1");
		//console.log(testArray);
        this.setState({classifications: testArray});

        let arrayOfClassificationComp = [];
        for(let i = 0; i<testArray.length; i++){
            let curClassification = testArray[i];
            arrayOfClassificationComp.push(
                <Checkbox passedValue={curClassification} key={i+curClassification} handleCheckboxChange={this.onToggleClassification.bind(this)} currentCheckboxStatus={this.findClassificationCheckStatusFromArray(curClassification)}/>
            );
        }
        this.setState({classification_objects: arrayOfClassificationComp});
    }
	

	findClassificationCheckStatusFromArray(currentClassification){
		let isChecked = false;
		//console.log("check in sort " + currentClassification);
		this.props.classificationsSelected.forEach((checkedStatus) => {
			//console.log("check in forEach " + checkedStatus);
			if(checkedStatus == currentClassification){isChecked = true};})

		return isChecked;
	}
	
	findGenresCheckStatusFromArray(currentClassification){
		let isChecked = false;
		//console.log("check in sort " + currentClassification);
		this.props.genresSelected.forEach((checkedStatus) => {
			//console.log("check in forEach " + checkedStatus);
			if(checkedStatus == currentClassification){isChecked = true};})

		return isChecked;
	}
	
	
	
    onToggleClassification(classification, checkStatus){

        let tempArray = this.props.classificationsSelected;
        let tempSet = new Set(tempArray);

        if(checkStatus === true){
            tempSet.add(classification);
        }
        if(checkStatus === false){
            tempSet.delete(classification);
        }
        
        let newArray = Array.from(tempSet);
        this.setState({classification_array: newArray}, () => console.log(this.state.classification_array));

        this.props.onClassificationCheckInput(newArray);
    }

	onToggleGenre(genre, checkStatus){
		
		let tempArray = this.props.genresSelected;
        let tempSet = new Set(tempArray);

        if(checkStatus === true){
            tempSet.add(genre);
        }
        if(checkStatus === false){
            tempSet.delete(genre);
        }
        
        let newArray = Array.from(tempSet);
        this.setState({genre_array: newArray}, () => console.log(this.state.genre_array));

        this.props.onGenreCheckInput(newArray);
		
		
		/*
		let check = false;
        let tempArray = this.state.genre_array;
        if(checkStatus == true){
            if(tempArray != null){
                for(let i = 0; i<tempArray.length; i++){
                    if(tempArray[i] != label){
                        check = true;
                    }
                }
            }
            if(check == true || tempArray.length == 0){
                tempArray.push(label);
                this.setState({genre_array: tempArray});
                console.log(tempArray);
            }
        }
        
        if(checkStatus == false){
            //console.log(checkState);
            for(let i = 0; i<tempArray.length; i++){
                if(tempArray[i] != label){
                    check = true;
                }
                else{
                    check = false;
                    console.log(tempArray[i]+"equals"+label);
                    tempArray.splice(i, 1);
                    console.log(tempArray);
                    break;
                }
            }
        }
        
        this.props.onGenreCheckInput(tempArray);
		*/
    }
	
	createClassificationCheckboxesToRender(){
		//console.log("AMAZING2");
		//console.log(testArray);
        //this.setState({classifications: testArray});

        let arrayOfClassificationComp = [];
        for(let i = 0; i<this.props.classificationArray.length; i++){
            let curClassification = this.props.classificationArray[i];
            arrayOfClassificationComp.push(
                <Checkbox passedValue={curClassification} key={i+curClassification} handleCheckboxChange={this.onToggleClassification.bind(this)} currentCheckboxStatus={this.findClassificationCheckStatusFromArray(curClassification)}/>
            );
        }
        //this.setState({classification_objects: arrayOfClassificationComp});
		return arrayOfClassificationComp;
		
	}

	createGenreCheckboxesToRender(){
		//console.log("AMAZING2");
		//console.log(testArray);
        //this.setState({classifications: testArray});

        let arrayOfGenresComp = [];
        for(let i = 0; i<this.props.genresArray.length; i++){
            let curGenre = this.props.genresArray[i];
            arrayOfGenresComp.push(
                <Checkbox passedValue={curGenre} key={i+curGenre} handleCheckboxChange={this.onToggleGenre.bind(this)} currentCheckboxStatus={this.findGenresCheckStatusFromArray(curGenre)}/>
            );
        }
        //this.setState({classification_objects: arrayOfClassificationComp});
		return arrayOfGenresComp;
		
	}
	/*
		generateCheckboxes() {
		let arrayOfRequiredGenres = [];
		let genreName = [];
        let arrayOfGenres = Array.from(CinemaStore.getArrayOfGenres()); 
        this.setState({ genres: arrayOfGenres}); 
		for(let i = 0; i < arrayOfGenres.length; i++){
            arrayOfRequiredGenres.push(
                <Checkbox passedValue={arrayOfGenres[i]} key={arrayOfGenres[i]} handleCheckboxChange={this.onToggleGenre.bind(this)} currentCheckboxStatus={this.findGenresCheckStatusFromArray(arrayOfGenres[i])}/>
            );
        }
        this.setState({ genre_objects: arrayOfRequiredGenres });
    }
	
	*/
	
	
    render(){
		
        let classificationCheckboxesToRender = this.createClassificationCheckboxesToRender();
		
		let genreCheckboxesToRender = this.createGenreCheckboxesToRender();

		
		
		
        return(
            <div className="sort-bar col-md-6 col-md-offset-3">

			<button type="button" className="btn btn-info btn-block" data-toggle="collapse" data-target="#demo">Click for Search & Sort</button>
				<div id="demo" className="collapse">
				<div className="panel panel-default">
					<div className="panel-body">
					<form>
						<input 
							type='text'
							placeholder='search for movies'
							value={this.props.filterText}
							ref={(input) => this.filterTextInput = input}
							onChange = {this.handleMovieSearchChange}
						/><br />Currently sorted by {this.props.currentSort} in {this.props.currentOrder} order<br />
						<button type="button" value="MOVIE_TITLE" className="btn btn-info" onClick={this.handleMovieSort.bind(this)}>Sort by Name</button>
						<button type="button" value="RELEASE_DATE" className="btn btn-info" onClick={this.handleMovieSort.bind(this)}>Sort by Release Date</button>
                        <div>
                            <h4>Filter by Genre...</h4>
                            {genreCheckboxesToRender}
                        </div>
                        <div>
                            <h4>Classifications</h4>
                            {classificationCheckboxesToRender}
                        </div>
					</form>
					</div>
				</div>

				</div>
			</div>
        );
    }
}