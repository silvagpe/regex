using System;
using System.Text.RegularExpressions;

namespace dotnet_regex
{
    class Program
    {
        static void Main(string[] args)
        {
            string ceps = @"
            99200000
            99200-000
            99.200-000";
            
            Regex regex = new Regex(@"\D");
            System.Console.WriteLine(regex.Replace(ceps, ""));

            
        }
    }
}
