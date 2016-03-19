


function Candidate( p_id )
{
	/** @type {number} */
	this.id = p_id;
	/** @type {string} */
	this.fname = "";
	/** @type {string} */
	this.lname = "";
	/** @type {number} */
	this.age = 30;
	/** @type {string} */
	this.job = "";
	/** @type {string} */
	this.province = ""
	/** @type {string} */
	this.party = "";
	/** @type {string} */
	this.state = "";

	this.initFromLocalData();
};

/** @const */ Candidate.STATE_ACTIVE 	= "ACTIVO";
/** @const */ Candidate.STATE_LABELED 	= "TACHADO";
/** @const */ Candidate.STATE_RESIGN 	= "RESIGN";

Candidate.prototype.initFromLocalData = function()
{

};

Candidate.prototype.clone = function()
{
	var t_candidate = new Candidate();
	t_candidate.id 		 = this.id;
	t_candidate.fname 	 = this.fname;
	t_candidate.lname 	 = this.lname;
	t_candidate.age 	 = this.age;
	t_candidate.job 	 = this.job;
	t_candidate.province = this.province;
	t_candidate.party 	 = this.party;
	t_candidate.state 	 = this.state;

	return t_candidate;
};